import React from 'react'
import './userSetting.css'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import Header from '../../components/header/Header'
import Dashboard from '../../components/dashboard/Dashboard'

const UserProfile = () => {

  // 정보변경 axios.patch
  // 정보변경 후 my info 페이지로 이동

  return (
    <Container maxWidth="lg">
      <Header/>
      <Box display='flex' >
        <Dashboard />
        <Container sx={{ display:{ xs:'inline', sm:'flex'}, justifyContent:'center', alignItems:'center'}}>
          <Box>
          </Box>
          <Box>
            <Box sx={{
              display:{xs:'block', sm:'flex'},
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'lightgray'
            }}>
              <Stack sx={{
                      display:'flex', 
                      flexDirection:'column', 
                      justifyContent:'center', 
                      alignItems:'center',
                      margin:'10px'
                    }}>
                <Typography>닉네임</Typography>
                <div className="img">이미지</div>
                <Button>프로필 사진 업데이트</Button>
              </Stack>
              <Stack sx={{
                      margin:'10px'
                    }}>
                  <TextField id="standard-basic" label="아이디" variant="standard" margin="normal" size="small" />
                  <TextField id="standard-basic" label="비밀번호" variant="standard" margin="normal" size="small" />
                  <TextField id="standard-basic" label="닉네임" variant="standard" margin="normal" size="small" />
                  <TextField id="standard-basic" label="이메일" variant="standard" margin="normal" size="small" />
                  <Button >정보 변경</Button>
                  <Button >회원 탈퇴</Button>
              </Stack>
            </Box>
          </Box>
        </Container>
       </Box>
    </Container>
  )
}

export default UserProfile