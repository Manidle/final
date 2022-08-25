import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import CourseCheckbox from '../../components/coursecheckbox/CourseCheckbox'
import Topbar from '../../components/topbar/Topbar'
import './posting.css'

const Posting = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

  return (
    <>
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
                    />
                </div>
                <div className="postingItem">
                    라디오버튼으로 카테고리 선택
                </div>
                <div className="postingItem">
                    <TextField
                        label="내용"
                        multiline
                        rows={10}
                    />  
                </div>
                <div className="postingItem">
                    <Button variant="contained" color="action" className="postingButton">
                        게시글 등록
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Posting