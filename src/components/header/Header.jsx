import { Box, Button, createTheme, Divider, Grid, Menu, MenuItem, SvgIcon, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

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

    const user = true;
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }

    const handleRoute =(props)=>{
        navigate(`/${props}`);
    }

    const handleUserProfile =()=>{
        navigate("/user/profile");
    }

    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);

  return (
    <ThemeProvider theme={theme}>
        <Box container display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Box >
                {/* 로고 */}
                <Button
                    id="basic-button"
                    sx={{ display:{ xs:'none', sm:'block'}}}
                    color='secondary'
                >
                    <img src="image/logo.png" alt="logo" className="logo" height="50px" width="50px" onClick={handleHome} />        
                </Button>
                {/* 햄버거메뉴 */}
                <Button sx={{ display:{ xs:'block', sm:'none'}}} color='secondary'>
                    <MenuIcon/>
                </Button>
            </Box>
            <Box display='flex' flexDirection='row'>
                <QuestionAnswerIcon fontSize='large' color='info' onClick={()=>{handleRoute("board")}} sx={{ display:{ xs:'none', sm:'block'}}}/>
                <SearchIcon fontSize='large' color='info' onClick={()=>{handleRoute("search")}} sx={{ display:{ xs:'none', sm:'block'}}}/>
                <Button
                    id="basic-button"
                    sx={{ color:'secondary', display:{ xs:'block', sm:'none'}}}
                >
                    <img src="image/logo.png" alt="logo" className="logo" height="50px" width="50px" onClick={handleHome} />        
                </Button>
            </Box>
            <Box >
                {user ? (
                <ul className="topList">
                    <div className="topListItem">
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color='secondary'
                        >
                            <img
                            className="topImg"
                            src="https://avatars.githubusercontent.com/u/102516088?v=4"
                            alt=""
                            />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            color='secondary'
                        >
                            <MenuItem onClick={handleUserProfile}>내 정보</MenuItem>
                            <MenuItem onClick={handleClose}>내가 쓴 글</MenuItem>
                            <MenuItem onClick={handleClose}>로그아웃</MenuItem>
                        </Menu>
                    </div>
                </ul>
                ) : (
                <ul className="topList">
                    <li className="topListItem">
                        LOGIN
                    </li>
                    <li className="topListItem">
                        REGISTER
                    </li>
                </ul>
                )}
            </Box>
        </Box>
        <Divider />
    </ThemeProvider>
  )
}

export default Header