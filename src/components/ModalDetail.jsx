import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ModalStayResult from './modalSearch/ModalStayResult';

const ModalDetail = ({currentCategory}) => {
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

  return (
    <ThemeProvider theme={theme}>
        {currentCategory === 'stay' ?
            <Box backgroundColor='gray'>
                <Typography>stay</Typography>
                <ModalStayResult />
            </Box> :
            (
                currentCategory === 'attraction' ?
                <Box backgroundColor='green'>
                    <Typography>attraction</Typography>
                    <Box>
                        <TextField placeholder='관광지를 검색하세요'/>
                        <Button className='attractionSearchButton'>검색</Button>
                    </Box>
                </Box> :
                (
                    currentCategory === 'train' ?
                    <Box backgroundColor='yellow'>
                        <Typography>train</Typography>
                        <Box>
                            <TextField placeholder='기차를 검색하세요'/>
                            <Button className='trainSearchButton'>검색</Button>
                        </Box>
                    </Box> :
                    (
                        <Box backgroundColor='red'>
                            <Typography>rentcar</Typography>
                            <Box>
                                <TextField placeholder='렌트카를 검색하세요'/>
                                <Button className='rentcarSearchButton'>검색</Button>
                            </Box>
                        </Box>
                    )
                )
            )
        }
    </ThemeProvider>
  )
}

export default ModalDetail