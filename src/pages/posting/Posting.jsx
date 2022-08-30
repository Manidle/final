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
        axios.post('http://localhost:8080/board/posting',
            {
                title:postTitle,
                userid:"1"
            }
        )
        .catch(function(error){
            console.log("post 보내기 실패");
            console.log(error);
            console.log(postTitle);
            console.log(postArticle);
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