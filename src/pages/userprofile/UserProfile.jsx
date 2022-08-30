import React from 'react'
import './userProfile.css'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '@mui/material'

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
    </Container>
  )
}

export default UserProfile