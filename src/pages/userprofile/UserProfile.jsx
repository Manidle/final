import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import MyInfo from "./MyInfo";
import MyPostAndLike from "./MyPostAndLike";
import Wrapper from "./Wrapper";
import jwt_decode from "jwt-decode";
import { makeOrderProfileImg } from "../../image/profileImg";

const UserProfile = () => {
  // 해당주소로 보내기
  const navigate = useNavigate();
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  const userData = jwt_decode(localStorage.getItem("token"));
  console.log(userData);
  const user = {
    username: userData.username,
    nickname: userData.nickname,
    email: userData.email,
    profileImg: makeOrderProfileImg(userData.id),
  };

  return (
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo page="INFO" />
        <Container className="DetailContainer">
          <Wrapper
            name="MY INFO"
            onClick={() => {
              handleRoute("user/update");
            }}
          >
            <MyInfo user={user} />
          </Wrapper>

          <Wrapper
            name="MY POST"
            onClick={() => {
              handleRoute("user/myposts");
            }}
          >
            <MyPostAndLike contents="내가 쓴 게시글들이 나타날 겁니다." />
          </Wrapper>

          <Wrapper
            name="MY POST LIKES"
            onClick={() => {
              handleRoute("user/mylikes");
            }}
          >
            <MyPostAndLike contents="내가 좋아요 누른 게시글들이 나타날 겁니다." />
          </Wrapper>
        </Container>
      </Box>
    </Container>
  );
};

export default UserProfile;
