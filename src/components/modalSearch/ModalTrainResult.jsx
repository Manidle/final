import { Box, Button, Container, createTheme, ListItem, TextField, ThemeProvider, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Calendar } from 'react-date-range';

const ModalTrainResult = () => {
    const theme = createTheme({
        palette: {
            primary: {
                // 가장 어두운 보라
            main: '#52057B',
            },
            secondary: {
                // 가장 밝은 보라
            main: '#BC6FF1',
            },
            info:{
                // 중간 보라
                main: '#892CDC',
            },
        },
    });

    // train 리스트
    const [trainLists, setTrainLists] = useState([])
    
    const [searchStartPoint, setSearchStartPoint] = useState("")
    const [searchEndPoint, setSearchEndPoint] = useState("")
    const [searchDate, setSearchDate] = useState(null);

    // train 검색 조회
    function searchTrain(){
        axios.get(`http://localhost:8080/api/auth/v1/filter/list/train/dep/arr?endPoint=${searchEndPoint}&startPoint=${searchStartPoint}`,{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setTrainLists(response.data)
            console.log(trainLists);
            console.log(searchDate);
        })
        .catch((error)=>{
            console.log(error.response);
            console.log(trainLists);
            console.log(searchDate);
        })
    }

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box className='modalSearch'>
                <TextField placeholder='출발지를 검색하세요' onChange={(e)=>{setSearchStartPoint(e.target.value)}}/>
                <TextField placeholder='도착지를 검색하세요' onChange={(e)=>{setSearchEndPoint(e.target.value)}}/>
                <Calendar data={searchDate}/>
                <Button className='trainSearchButton' onClick={()=>{searchTrain()}}>검색</Button>
            </Box>
            <Box maxHeight='400px' margin='5px' overflow='auto' >
                {trainLists.length === 0 ?
                    <Box>출발지와 도착지를 입력해 기차를 검색해보세요!</Box> :
                    trainLists.map((trainList)=>(
                        <ListItem  display='flex' justifyContent='space-between' key={trainList.trainId}>
                            <Typography>출발지: {trainList.startPonint}</Typography>
                            <Typography>---›</Typography>
                            <Typography>도착지: {trainList.endPoint}</Typography>
                            <Typography>출발시각: {trainList.departureTime}</Typography>
                            <Typography>---›</Typography>
                            <Typography>도착시각: {trainList.arriveTime}</Typography>
                            <Typography>요금: {trainList.trainPrice}</Typography>
                            <Typography>좋아요 수 : {trainList.likeCount}</Typography>
                        </ListItem>
                    ))
                }
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default ModalTrainResult