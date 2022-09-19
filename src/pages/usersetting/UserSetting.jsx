import React from "react";
import "./userSetting.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/header/Header";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  function handler(props) {
    navigate(`${props}`);
  }

  // user
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userImg, setUserImg] = useState("");
  const [email, setEmail] = useState("");

  // 정보변경 axios.patch
  // 정보변경 후 my info 페이지로 이동

  // 회원 정보 변경
  function updateUserProfile(id) {
    axios
      .put(`http://localhost:8080/user/${id}`, {
        loginId: userId,
        password: password,
        nickname: userNickname,
        userInfoDTO: {
          profileImg: userImg,
          email: email,
        },
      })
      .then(() => {
        handler("/user/profile");
      })
      .catch(function (error) {
        console.log(error);
        console.log(id);
      });
  }

  // 회원 정보 삭제(탈퇴)
  function deleteUser(id) {
    axios
      .delete(`http://localhost:8080/user/${id}`)
      .then(() => {
        handler("");
      })
      .catch(function (error) {
        console.log(error);
        console.log(id);
      });
  }

  return (
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo page="EDIT" />

        {/* <Card
          variant
          sx={{
            backgroundColor: "#F2E2FC",
            marginBottom: 2,
            borderRadius: 3,
            padding: 1,
          }}
        > */}
        <Container
          sx={{
            backgroundColor: "#F2E2FC",
            borderRadius: 3,
            marginLeft: 2,
            display: { xs: "inline", sm: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              marginLeft: "8rem",
              padding: "5px",
            }}
          >
            <Typography>소울치킨 이름이 들어갈 자리</Typography>
            <Avatar
              alt="Profile IMG"
              src="https://avatars.githubusercontent.com/u/90738604?v=4"
              sx={{ width: 100, height: 100 }}
            />{" "}
            <Button>프로필 사진 업데이트</Button>
            <Button>프로필 사진 삭제</Button>
          </Stack>
          <Stack
            sx={{
              margin: "10px",
              marginRight: "8rem",
            }}
          >
            <TextField
              id="standard-basic"
              label="아이디"
              variant="standard"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              margin="normal"
              size="small"
              type="text"
            />
            <TextField
              id="standard-basic"
              label="비밀번호"
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              margin="normal"
              size="small"
              type="password"
            />

            <TextField
              id="standard-basic"
              label="이메일"
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              margin="normal"
              size="small"
              type="email"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="standard-basic"
                label="닉네임"
                variant="standard"
                onChange={(e) => {
                  setUserNickname(e.target.value);
                }}
                margin="normal"
                size="small"
                type="text"
              />

              <Button onClick={() => updateUserProfile(5)}>정보 변경</Button>
            </Box>
            <Button onClick={() => deleteUser(4)}>회원 탈퇴</Button>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default UserProfile;
