import React from 'react'
import './userProfile.css'
import Topbar from '../../components/topbar/Topbar'
import { Container, TextField } from '@mui/material'

const UserProfile = () => {
  return (
    <Container maxWidth="lg">
      <Topbar/>
      <div>UserProfile
        내가 작성한글(post)
        내가 쓴 댓글(reply)
        내가 좋아요 한 글(like)
        내 정보 수정
        회원탈퇴
      </div>
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="leftProfile">
            <div className="profileUserNickname">닉네임</div>
            <div className="profileUserImage">이미지</div>
            <button className="profileImageUpdateButton">프로필 사진 업데이트</button>
          </div>
          <div className="rightProfile">
            <TextField id="standard-basic" label="아이디" variant="standard" margin="normal" size="small" />
            <TextField id="standard-basic" label="비밀번호" variant="standard" margin="normal" size="small" />
            <TextField id="standard-basic" label="닉네임" variant="standard" margin="normal" size="small" />
            <TextField id="standard-basic" label="이메일" variant="standard" margin="normal" size="small" />
            <div className="profileUserId"></div>
            <div className="profileUserPassword"></div>
            <div className="profileUserEmail"></div>
            <button className="profileUpdateButton">정보 변경</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UserProfile