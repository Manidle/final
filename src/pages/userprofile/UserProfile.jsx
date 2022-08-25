import React from 'react'
import './userProfile.css'
import Topbar from '../../components/topbar/Topbar'
import { Container } from '@mui/material'

const UserProfile = () => {
  return (
    <Container maxWidth="lg">
      <Topbar/>
      <div>UserProfile</div>
    </Container>
  )
}

export default UserProfile