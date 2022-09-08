import { Container, Card, CardActions, Button, CardContent, TextField, Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'

const PostDetail = () => {

    // 게시글 데이터 가져오기
    const [postBoard, setPostBoard] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postContents, setPostContents] = useState("")
    const [postLikeCount, setPostLikeCount] = useState(0)
    const [postUser, setPostUser] = useState("")
    const [postStayList, setPostStayList] = useState([])
    const [postAttractionList, setPostAttractionList] = useState([])
    const [postRentCarList, setPostRentCarList] = useState([])
    const [postTrainList, setPostTrainList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/post/1')
        .then((response)=>{ 
            console.log(response.data);
            setPostBoard(response.data.boardId);
            setPostTitle(response.data.title);
            setPostContents(response.data.contents);
            setPostLikeCount(response.data.likeCount);
            setPostUser(response.data.userId);
            setPostRentCarList(response.data.postRentCarList);
            setPostTrainList(response.data.postTrainList);
            setPostStayList(response.data.postStayList);
            setPostAttractionList(response.data.postAttractionList);
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
    }, [])


    // reply 쓰기
    const [replyContent, setReplyContent] = useState("");

    function replySubmit(){
        axios.get('http://localhost:8080/reply', {
            params:{
                user:1,
                post:1,
                contents:replyContent
            }
        })
        .catch(function(error){
            if(error.response){
                console.log("첫번째 에러");
                console.log(error.response.data);
                console.log(error.response);
            }
            else if(error.request){
                console.log("두번째 에러");
                console.log(error.request);
            }
            else {
                console.log("세번째 에러");
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
    }

    // reply 읽어오기
    const [isLoading, setIsLoading] = useState(true);
    const [reply, setReply] = useState([]);

    // useEffect(()=>{
    //     const getReplies = async () =>{
    //         const {
    //             data: {
    //                 data: {reply},
    //             },
    //         } = await axios.get('http://localhost:8080/reply/post/1')
    //         .then((response)=>{
    //             setReply(response.data)
    //             console.log(reply);
    //         });
    //         setReply(reply);
    //         setIsLoading(false);
    //     }
    //     getReplies();
    // }, [reply])

    useEffect(()=>{
        axios.get('http://localhost:8080/reply/post/1')
        .then((response)=>{
            setReply(response.data)
            // console.log(reply);
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

    // reply 삭제
    const handleReplyDelete = (props) => {
        
        axios.delete(`http://localhost:8080/reply/${props.replyId}`)
        .then((response)=>{
            console.log(response);
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
    }

    const [likeClick, setLikeClick] = useState(false);

    function handleLikeClick(){
        setLikeClick(!likeClick)
    }

  return (
    <Container maxWidth="lg">
        <Header/>
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTopContainer">
                    <div className="postBoard">
                        게시글  경주 같은 경로 표시
                    </div>
                    <div className="postTitle">
                        게시글 제목
                    </div>
                    <div className="postTitleFooter">
                        <div className="postTime">
                            게시글 작성시간
                        </div>
                        <div className="psotViewCount">
                            조회수 표시
                        </div>
                        <div className="postLikeCount">
                            <a onClick={handleLikeClick}>
                                {likeClick ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                            </a>
                        </div>
                    </div>
                </div>
                <div className="postDetailContainer">
                    게시글내용
                </div>
                <Grid>
                    게시판: {postBoard}
                    게시글 제목: {postTitle}
                    게시글 내용: {postContents}
                    게시글 좋아요 수: {postLikeCount}
                    게시글 작성자: {postUser}
                    게시글 숙소리스트: {postStayList}
                    게시글 관광지리스트: {postAttractionList}
                    게시글 렌트카리스트: {postRentCarList}
                    게시글 기차리스트: {postTrainList}

                </Grid>


                <div className="replyContainer">
                    <div className="replyWrapper">
                        <div className="inputReply">
                            <TextField
                                label="댓글 내용"
                                multiline row={3}
                                onChange={(e)=>{setReplyContent(e.target.value);}}
                            />
                        </div>
                        <button className="replySubmitButton" onClick={replySubmit}>입력</button>
                        <div className="replyDisply">
                            <div className="replyTopContainer">
                                <div className="replyTime">
                                    댓글작성시간
                                </div>
                            </div>
                            <div className="replyContentsContainer">
                                <div className="replyContents">
                                    {reply.map((reply)=>(
                                        <Card>
                                            <CardContent>댓글작성자: {reply.userId}</CardContent>
                                            <CardContent>replyId: {reply.replyId}</CardContent>

                                            <CardActions><Button size="small" onClick={()=>{handleReplyDelete(reply)}}><DeleteForeverIcon/></Button></CardActions>
                                            <CardContent>댓글 내용: {reply.contents}</CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommendPostContainer">
                    추천게시글
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PostDetail