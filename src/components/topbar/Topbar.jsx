import "./topbar.css";
import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Menu, MenuItem } from "@mui/material";

export default function Topbar() {
  const user = true;

  //navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleHome =()=>{
    navigate("/");
  }

  const handleUserProfile =()=>{
    navigate("/user/profile");
  }

  const handleCommunity =()=>{
    navigate("/board");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <GitHubIcon className="topLeftItem" color="disabled" onClick={()=>window.open('https://github.com/Manidle')}/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" onClick={handleHome}><HomeIcon />  </li>
          <li className="topListItem" onClick={handleCommunity}><ForumIcon /></li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <ul className="topList">
            <div className="topListItem">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
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
      </div>
    </div>
  );
}
