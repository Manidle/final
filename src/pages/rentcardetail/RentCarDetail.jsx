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
import { BASE_URL } from "../../baseUrl";

const RentCarDetail = () => {
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

  const imgUrl =
    "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg";
  const [stayAddress, setStayAddress] = useState("경기도 양평군 어쩌고");
  const [stayCheckin, setStayCheckIn] = useState("14:00");
  const [stayCheckOut, setStayCheckOut] = useState("10:00");
  const [stayLikeCount, setStayLikeCount] = useState(5);
  const [stayName, setStayName] = useState("양평 블루밍펜션");
  const [stayPrice, setStayPrice] = useState(500);

  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 숙소 좋아요
  const [likeClick, setLikeClick] = useState(false);

  function handleLikeClick() {
    axios
      .get(BASE_URL + "/api/auth/v1/like/click/stay", {
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
        <Container maxWidth="lg">
          <Box
            sx={{
              padding: "50px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid xs={1}></Grid>
              <Grid xs={3}>
                <LeftSide
                  imgUrl={imgUrl}
                  stayPrice={stayPrice}
                  stayName={stayName}
                />
              </Grid>
              <Grid xs={0.2}></Grid>

              <Grid xs={6.8}>
                <RightSide
                  stayAddress={stayAddress}
                  stayLikeCount={stayLikeCount}
                  stayName={stayName}
                  stayPrice={stayPrice}
                  stayCheckin={stayCheckin}
                  stayCheckOut={stayCheckOut}
                  imgUrl={imgUrl}
                />
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
      <br />
      <br />
      <br />
      여기부터 다시 시작
    </ThemeProvider>
  );
};

export default RentCarDetail;
