import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import './board.css'

const Community = () => {

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
            <div className="comunityCategory">
                <ul className="communityCategoryItem">카테고리1</ul>
                <ul className="communityCategoryItem">카테고리2</ul>
                <ul className="communityCategoryItem">카테고리3</ul>
            </div>
            <div className="communityBoard">
                <ol className="communityPosts">게시글1</ol>
                <ol className="communityPosts">게시글2</ol>
                <ol className="communityPosts">게시글3</ol>
            </div>
                <div className="boardFooter">
                <button className="boardLeftButton">이전</button>
                <div className="boardPages">게시판 페이지</div>
                <button className="boardLeftButton">다음</button>
                <button className="communityPostingButton" onClick={handlePosting}>게시글 등록</button>
            </div>
            <div className="boardSearchbar">
                <input type="text" className="postSearch" placeholder='게시글 검색'/>
                <button className="postSearchButton">게시글 검색</button>
            </div>
        </div>
    </>
  )
}

export default Community