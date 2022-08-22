import React from 'react'
import CourseCheckbox from '../../components/coursecheckbox/CourseCheckbox'
import Topbar from '../../components/topbar/Topbar'
import './posting.css'

const Posting = () => {
  return (
    <>
        <Topbar/>
        <div className="postingContainer">
            <div className="postingTitle">게시글 등록</div>
            <div className="postingItem">
                <input type="text" className="inputTitle" placeholder='제목'/>
            </div>
            <div className="postingItem">
                라디오버튼으로 카테고리 선택
            </div>
            {/* <div className="postItem">
                체크박스로 course 삽입
                <CourseCheckbox/>
            </div> */}
            <div className="postItem">
                <input type="text" className="inputDesc" placeholder='내용'/>
            </div>
            <button className="postSubmitButton">게시글 등록</button>

        </div>
    </>
  )
}

export default Posting