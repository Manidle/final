import { Button, Card, CardContent, Container, Input, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BoardCategory from '../../components/boardcategory/BoardCategory'
import './board.css'
import Notice from '../../components/Notice/Notice';
import Header from '../../components/header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Community = () => {

    const ariaLabel = { 'aria-label': 'description' };

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
            setPosts(response.data)
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

    function handlePostDetail(props){
        navigate(`/post/${props}`)
    }

  return (
    <Container maxWidth="lg">
        <Header/>
        <div className="communityContainer">
            <div className="communityWrapper">
                <div className="comunityCategory">
                    <BoardCategory/>
                </div>
                <div className="communityBoard">
                    <Notice/>
                    {posts.map((posts)=>(
                        <Card>
                            <CardContent onClick={()=>{handlePostDetail(posts.postId)}}>게시글 번호: {posts.postId}</CardContent>
                            <CardContent>게시글제목: {posts.title}</CardContent>
                            <CardContent>게시글 작성자: {posts.user}</CardContent>
                            <CardContent>댓글 수: {posts.replyList}</CardContent>
                        </Card>
                    ))}
                    <ol className="communityPosts">게시글1</ol>
                    <ol className="communityPosts">게시글2</ol>
                    <ol className="communityPosts">게시글3</ol>
                </div>
                <div className="boardFooter">
                    <Stack spacing={2}>
                        <Pagination count={20} defaultPage={6} boundaryCount={2} />
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
                    <Button variant="contained" color="action" className="communityPostingButton" onClick={handlePosting}>
                        게시글 등록
                    </Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Community