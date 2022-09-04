import { PhotoCamera } from '@mui/icons-material'
import { Button, Container, IconButton, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import './posting.css'

const Posting = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // 게시글 data
    const [postTitle, setPostTitle] = useState("");
    const [postArticle, setPostArticle] = useState("");

    // 게시글 data 보내기
    function postSubmit(){
        axios.post('http://localhost:8080/post', {
            title:postTitle,
            contents:postArticle,
            likeCount:0,
            boardId:1,
            userId:1
        }
            )
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
        <Topbar/>
        <div className="postingContainer">
            <div className="postingWrapper">
                <div className="postingItem">
                    <div className="postingTitle">게시글 등록</div>
                </div>
                <div className="postingItem">
                    <TextField
                        label="게시글 제목"
                        size="small"
                        onChange={(e)=>{setPostTitle(e.target.value);}}
                    />
                </div>
                <div className="postingItem">
                    {/* 사진 파일 추가 버튼 */}
                    <IconButton color="default" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </div>
                <div className="postingItem">
                    <TextField
                        label="내용"
                        multiline
                        rows={10}
                        onChange={(e)=>{setPostArticle(e.target.value);}}
                    />  
                </div>
                <div className="postingItem">
                    <Button variant="contained" color="action" className="postingButton" onClick={postSubmit}>
                        게시글 등록
                    </Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Posting