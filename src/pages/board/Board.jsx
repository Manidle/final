import { Button, Box, Card, CardContent, Container, Input, InputAdornment, Pagination, Stack, TextField, ThemeProvider, createTheme, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BoardCategory from '../../components/boardcategory/BoardCategory'
import './board.css'
import Notice from '../../components/Notice/Notice';
import Header from '../../components/header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import DashboardCommunity from '../../components/dashboardcommunity/DashboardCommunity';
import usePagination from '../../components/Pagination';

const Community = () => {

    const theme = createTheme({
        palette: {
            primary: {
            // Purple and green play nicely together.
            main: '#52057B',
            },
            secondary: {
            // This is green.A700 as hex.
            main: '#BC6FF1',
            },
            info:{
                main: '#892CDC',
            },
        },
    });

    //navigate
    const navigate = useNavigate()

    // handlePosting
    const handlePosting = () => {
        navigate("/posting");
    }

    // 게시글 전체 가져오기
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/post')
        .then((response)=>{
            console.log(response.data);
            setPosts(response.data.reverse())
        })
        .catch(function(error){
            if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log("첫번째 에러");
                console.log(error.response.data);
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log("두번째 에러");
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log("세번째 에러");
            console.log('Error', error.message);
            }
            console.log(error.config);
        })
    },[])

    // useLocation 으로 postDetail 에 보내기.
    function handlePostDetail(props){
        navigate(`/post/${props}`, {
            state:{
                postId:props
            }
        })
    }

    // 게시글 페이징
    const [page, setPage] = useState(1);
    const perPage = 10;
    const count = Math.ceil(posts.length / perPage);
    const postsPerPage = usePagination(posts, perPage);

    const handlePage = (e, p) => {
        setPage(p);
        postsPerPage.jump(p);
    }

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Header/>
            <Box display='flex'>
                <DashboardCommunity />
                <Box>
                    <div className="communityContainer">
                        <div className="communityWrapper">
                            <div className="comunityCategory">
                                <BoardCategory/>
                            </div>
                            <div className="communityBoard">
                                {/* <Notice/> */}
                                {posts.length === 0 ? <Box padding="10px">"첫 게시글을 작성해보세요!"</Box> : postsPerPage.currentData().map((post)=>(
                                    <ListItem display='flex' justifyContent='space-between' key={post.postId} >
                                        <CardContent onClick={()=>{handlePostDetail(post.postId)}}>게시글 번호: {post.postId}</CardContent>
                                        <CardContent onClick={()=>{handlePostDetail(post.postId)}}>게시글제목: {post.title}</CardContent>
                                        <CardContent>게시글 작성자: {post.user}</CardContent>
                                        <CardContent>댓글 수: {post.replyList}</CardContent>
                                    </ListItem>
                                ))}
                            </div>
                            <div className="boardFooter">
                                <Stack spacing={2}>
                                    <Pagination
                                        size='small'
                                        count={20}
                                        boundaryCount={2}
                                        onChange={handlePage}
                                    />
                                </Stack>
                            </div>
                            <div className="boardSearchbar">
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>
                                        )
                                    }}
                                    size="small"
                                />
                                <Button variant="contained" color="action" className="postSearchButton">
                                    게시글 검색
                                </Button>
                                <Button variant="contained" color='info' className="communityPostingButton" onClick={handlePosting}>
                                    게시글 등록
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Community