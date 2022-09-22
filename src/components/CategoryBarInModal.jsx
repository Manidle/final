import { Box, createTheme, ListItem, ThemeProvider } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryDetail from './CategoryDetail';
import ModalDetail from './ModalDetail';

const CategoryBarInModal = () => {
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

    // tab list
    const categoryLists = [
        { thisCategory:'stay', url:'stay' },
        { thisCategory:'attraction', url:'attraction' },
        { thisCategory:'train', url:'train' },
        { thisCategory:'rentcar', url:'rentcar' },
    ];
const [currentCategory, setCurrentCategory] = useState("stay")

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <Box >
                    <Box className='categorySelect' display='flex' padding='5px'>
                        {categoryLists.map((categories)=>(
                            <ListItem display='flex' key={categories.thisCategory} dense='true'>
                                <CategoryDetail
                                    setCurrentCategory={()=>setCurrentCategory(categories.thisCategory)}
                                    currentCategory={currentCategory}
                                    thisCategory={categories.thisCategory}
                                />
                            </ListItem>
                        ))}
                    </Box>
                    <Box className='categoryContents' display='row' padding='10px'>
                        <Box>
                            {/* 여기에 컴포넌트하나를 만들어서 props 로 Url 을 내려주면 받은 detail 은
                            if 문이나 switch문이나 case 로 return 값을 검색창으로 보내는 거지. 그러면
                            검색창의 함수가 어떤거냐에 따라. 받아오는 데이터가 달라질테고?
                            아니지 데이터를 위로 올려보낼 수가 있나?????????
                                */}
                            <ModalDetail
                            currentCategory={currentCategory}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default CategoryBarInModal