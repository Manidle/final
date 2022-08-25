import { Button, Input, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BoardCategory from '../../components/boardcategory/BoardCategory'
import Topbar from '../../components/topbar/Topbar'
import './board.css'

const Community = () => {

    const ariaLabel = { 'aria-label': 'description' };

    //navigate
    const navigate = useNavigate()

    // handlePosting
    const handlePosting = () => {
        navigate("/posting");
    }

  return (
    <>
        <Topbar/>
        <div className="communityContainer">
            <div className="communityWrapper">
                <div className="comunityCategory">
                    <BoardCategory/>
                </div>
                <div className="communityBoard">
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
    </>
  )
}

export default Community