import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header/Header'

const UserProfile = () => {
  return (
    <Container maxWidth="lg">
        <Header/>
        <Typography component="h2" gutterBottom>
            내 정보
        </Typography>
        <Card elevation="5">
            <CardContent>
                <Typography variant='body1' component="p">
                    이미지 내 정보가 간략하게 나타날 겁니다. 아이디, 이메일 비밀번호 닉네임
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Container>
  )
}

export default UserProfile