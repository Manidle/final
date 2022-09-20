import { Container, createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header';

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

    const [attractionAddress, setAttractionAddress] = useState('');
    const [attractionAddressDetail, setAttractionAddressDetail] = useState('');
    const [attractionLikeCount, setAttractionLikeCount] = useState(0);
    const [attractionName, setAttractionName] = useState('');
    const [attractionPrice, setAttractionPrice] = useState(0);
    const [attractionDetailAddress, setAttractionDetailAddress] = useState('');


  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
            <Header/>
            <CategoryBar category='attraction'/>
        </Container>
    </ThemeProvider>
  )
}

export default SearchAttraction