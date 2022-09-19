import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import MyInfo from "./MyInfo";
import MyPostAndLike from "./MyPostAndLike";
import Wrapper from "./Wrapper";

const UserProfile = () => {
  // 해당주소로 보내기
  const navigate = useNavigate();
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  return (
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo />
        <Container className="DetailContainer">
          <Wrapper
            name="MY INFO"
            onClick={() => {
              handleRoute("user/update");
            }}
          >
            <MyInfo />
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
