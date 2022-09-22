import { Box, Container, createTheme, ListItem, Pagination, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header';
import usePagination from '../../components/Pagination';


const SearchRentcar = () => {
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
    
    // 렌트카 리스트
    const [rentcarLists, setRentcarLists] = useState([]);

    // 렌트카 검색어
    const [searchRentcar, setSearchRentcar] = useState('')

    function searchAllRentcar(){
        axios.get('http://localhost:8080/api/auth/v1/list/rentcar',{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setRentcarLists(response.data);
            console.log(rentcarLists);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(()=>{
        searchAllRentcar();
    },[])

    // 렌트카 페이징
    const [page, setPage] = useState(1);
    const perPage = 20;
    const count = Math.ceil(rentcarLists.length / perPage);
    const rentcarListsPerPage = usePagination(rentcarLists, perPage);

    const handlePage = (e, p) => {
        setPage(p);
        rentcarListsPerPage.jump(p);
    }
    

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
            <Header/>
            <CategoryBar category='rentcar'/>
            <Stack>
                <TextField onChange={(e)=>{setSearchRentcar(e.target.value)}}/>
            </Stack>
            <Box>
                {rentcarLists.length === 0 ?
                    <Box>렌트카가 없습니다.</Box> :
                    rentcarListsPerPage.currentData().map((rentcarList)=>(
                        <ListItem display='flex' justifyContent='space-between' key={rentcarList.rentcarId}>
                            <Typography>렌트카 지역: {rentcarList.address}</Typography>
                            <Typography>렌트카 회사: {rentcarList.companyName}</Typography>
                            <Typography>렌트카 종류: {rentcarList.carSort}</Typography>
                            <Typography>렌트카 이름: {rentcarList.carName}</Typography>
                            <Typography>좋아요 수: {rentcarList.likeCount}</Typography>
                        </ListItem>
                    ))
                }
            </Box>
            <Stack>
                <Pagination
                    size='small'
                    count={count}
                    boundaryCount={2}
                    onChange={handlePage}
                />
            </Stack>
        </Container>
    </ThemeProvider>
  )
}

export default SearchRentcar