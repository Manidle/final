import { Box, Button, Container, createTheme, ListItem, ThemeProvider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header';
import jwt_decode from 'jwt-decode';

const SearchAttraction = () => {
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

    const [attractions, setAttractions] = useState([])

    const [attractionAddress, setAttractionAddress] = useState('');
    const [attractionAddressDetail, setAttractionAddressDetail] = useState('');
    const [attractionLikeCount, setAttractionLikeCount] = useState(0);
    const [attractionName, setAttractionName] = useState('');
    const [attractionPrice, setAttractionPrice] = useState(0);
    const [attractionDetailAddress, setAttractionDetailAddress] = useState('');

    function searchAllAttraction(){
        axios.get('http://localhost:8080/api/auth/v1/list/attraction',{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setAttractionAddress(response.address);
            console.log(attractionAddress);
            setAttractions(response.data);
            console.log(attractions);
            console.log(attractions[0].name);
        }
        )
    }

    useEffect(()=>{
        searchAllAttraction();
    },[])

    const [searchAttraction, setSearchAttraction] = useState("")

    function searchFilterAttraction(){
        axios.get('http://localhost:8080/api/filter/attraction/search',{
                search:{searchAttraction}
            },
            {headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response=>{
            setAttractions(response.data);
            console.log(searchAttraction);
            console.log(response.data);
        }))
    }


    const userData = jwt_decode(localStorage.getItem('token'));

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
            <Header/>
            <CategoryBar category='attraction'/>
            <input onChange={(e)=>{setSearchAttraction(e.target.value)}} />
            <Button onClick={()=>{searchFilterAttraction()}}>테스트</Button>
            <Box>
                {attractions.length === 0 ?
                    <Box>관광지가 없습니다.</Box> :
                    attractions.map((attraction)=>(
                        <ListItem display='flex' justifyContent='space-between' key={attraction.attractionId} dense='true'>
                            <Typography>관광지 이름: {attraction.name}</Typography>
                            <Typography>관광지 지역: {attraction.address}</Typography>
                            <Typography>좋아요 수: </Typography>
                        </ListItem>
                    ))
                }
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default SearchAttraction