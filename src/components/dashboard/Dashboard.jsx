import { Box, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

const Dashboard = () => {

  return (
    <Box >
        <div className="dashBoardContainer">
            <div className="dashBoardWrapper">
                <Box sx={{ display:{ xs:'block', sm:'none'}}}>
                    <MenuIcon/>
                </Box>
                <Box sx={{ display:{ xs:'none', sm:'block'}, backgroundColor:'purple', minWidth:"200px"}} >
                    <Stack className="dashBoardTitleContainer">
                        <Typography className='dashBoardTitle'>My Page</Typography>
                    </Stack>
                    <Stack className="dashBoardSubTitle">
                        <div className="dashBoardMyInfo">
                            <Typography className='dashBoardSubtitle'>My Info</Typography>
                        </div>
                        <Stack className="dashBoardMyInfoDetail">
                            <Typography className='dashboardDetail'>INFO</Typography>
                            <Typography className='dashboardDetail'>EDIT</Typography>
                            <Typography className='dashboardDetail'>MY POST</Typography>
                            <Typography className='dashboardDetail'>MY POST LIKE</Typography>
                            <Typography className='dashboardDetail'>MY REPLY</Typography>
                        </Stack>
                    </Stack>
                    <Stack className="dashBoardSubTitle">
                        <div className="dashBoardTravel">
                            <Typography className='dashBoardSubtitle'>LIKES</Typography>
                        </div>
                        <Stack className="dashBoardTravelDetail">
                            <Typography className='dashboardDetail'>STAY</Typography>
                            <Typography className='dashboardDetail'>ATTRACTION</Typography>
                            <Typography className='dashboardDetail'>TRAIN</Typography>
                            <Typography className='dashboardDetail'>RENTCAR</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </div>
        </div>
    </Box>
  )
}

export default Dashboard