import { Container, Card, CardActions, Button, CardContent, TextField } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'

const PostDetail = () => {

    // reply 쓰기
    const [replyContent, setReplyContent] = useState("");

    function replySubmit(){
        axios.get('http://localhost:8080/reply', {
            params:{
                user:8,
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
            console.log(reply);
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
                            좋아요 표시
                        </div>
                    </div>
                </div>
                <div className="postDetailContainer">
                    게시글내용
                </div>


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