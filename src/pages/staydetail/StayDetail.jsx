import {
  Box,
  Container,
  createTheme,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import Header from "../../components/header/Header";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const StayDetail = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#52057B",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#BC6FF1",
      },
      info: {
        main: "#892CDC",
      },
    },
  });

  const [stayAddress, setStayAddress] = useState("");
  const [stayCheckin, setStayCheckIn] = useState("");
  const [stayCheckOut, setStayCheckOut] = useState("");
  const [stayLikeCount, setStayLikeCount] = useState(0);
  const [stayName, setStayName] = useState("");
  const [stayPrice, setStayPrice] = useState(0);

  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 숙소 좋아요
  const [likeClick, setLikeClick] = useState(false);

  function handleLikeClick() {
    axios
      .get("http://localhost:8080/api/auth/v1/like/click/stay", {
        params: {
          user: userData.id,
          stay: 1,
        },
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setLikeClick(!likeClick);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <Box className="stayContainer">
          <Box className="stayTop">
            <Box className="stayBoard" display="flex">
              숙소 ›{" "}
              <Typography color="info" fontWeight="bold">
                {stayAddress}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {stayName}
              </Typography>
            </Box>
            <Box className="stayTitleFooter">
              <Box className="CheckInTime">
                <Typography>가격: {stayPrice}</Typography>
              </Box>
              <Box className="stayLikeCount" display="flex">
                <span onClick={handleLikeClick}>
                  {likeClick ? (
                    <FavoriteIcon
                      color="info"
                      onClick={() => {
                        setStayLikeCount(stayLikeCount - 1);
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      color="info"
                      onClick={() => {
                        setStayLikeCount(stayLikeCount + 1);
                      }}
                    />
                  )}
                </span>
                <Typography>{stayLikeCount}</Typography>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="stayDetail">
            <br />
            숙소 이름: {stayName}
            <br />
            숙소 주소: {stayAddress}
            <br />
            숙소 좋아요: {stayLikeCount}
            <br />
            숙소 가격: {stayPrice}
            <br />
            숙소 체크인, 체크아웃: {stayCheckin} , {stayCheckOut}
          </Box>
          <Box>
            <div className="recommendStayContainer">추천 숙소</div>
          </Box>
        </Box>
      </Container>
      <br />
      <br />
      <br />
      여기부터 다시 시작
      <Grid container>
        <Grid xs={4}>
          <LeftSide />
        </Grid>
        <Grid xs={8}>
          <RightSide />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default StayDetail;
