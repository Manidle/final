import {
  Container,
  Button,
  Grid,
  Divider,
  createTheme,
  ThemeProvider,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Reply from "../../components/reply/Reply";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../baseUrl";
import Footer from "../../components/footer/Footer";
import { borderColor } from "@mui/system";
import HotPost from "../../components/hotposts/HotPost";
import HotPostCardView from "../../components/hotposts/HotPostCardView";

const PostDetail = () => {
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
      disabled: {
        main: "#8C8C8C",
      },
    },
  });

  // board 에서 보낸 postId 를 받아오기
  const postProps = useLocation();
  // console.log(postId.state.postId);
  const postId = postProps.state.postId;

  const navigate = useNavigate();

  // 게시글 삭제 후 이동
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  // 게시글 데이터 가져오기
  const [postData, setPostData] = useState([]);
  const [postLikeCount, setPostLikeCount] = useState(0);
  const [postUser, setPostUser] = useState("");
  const [postStayList, setPostStayList] = useState([]);
  const [postAttractionList, setPostAttractionList] = useState([]);
  const [postRentCarList, setPostRentCarList] = useState([]);
  const [postTrainList, setPostTrainList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/v1/post/${postProps.state.postId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setPostData(response.data);
        setPostLikeCount(response.data.likeCount);
        setPostUser(response.data.userId);
        setPostRentCarList(response.data.postRentCars);
        setPostTrainList(response.data.postTrains);
        setPostStayList(response.data.postStays);
        setPostAttractionList(response.data.postAttractions);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  console.log(postLikeCount);

  // 게시글 삭제
  function deletePost() {
    axios
      .delete(`${BASE_URL}/api/auth/v1/post/${postProps.state.postId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("삭제 했습니다.");
        console.log(response);
        handleRoute("board");
        console.log(postId);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  const userData = jwt_decode(localStorage.getItem("token"));

  // 게시글 좋아요
  const [likeClick, setLikeClick] = useState(false);

  function handleLikeClick() {
    axios
      .get(`${BASE_URL}/api/auth/v1/like/click/post`, {
        params: {
          user: userData.id,
          post: postId,
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
      <Container maxWidth="lg">
        <Header />
        <div className="postContainer">
          <Box className="postWrapper" flexGrow={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <Box className="postTopContainer">
                  <Box className="postBoard" display="flex" margin="1%">
                    게시판 ›
                    <Typography
                      color="info"
                      fontWeight="bold"
                      marginLeft="1%"
                      onClick={() => {
                        handleRoute(`board/${postData.boardId}`);
                      }}
                    >
                      {postData.boardName}
                    </Typography>
                  </Box>
                  <Box
                    className="postTitle"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    margin="1%"
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {postData.title}
                    </Typography>
                    <Box
                      className="rightTitle"
                      display="flex"
                      marginRight="4%"
                      alignItems="center"
                    >
                      <Typography color="secondary">
                        {postData.nickname}
                      </Typography>
                      {postData.userId === userData.id ? (
                        <Button
                          className="postDeleteButton"
                          onClick={deletePost}
                          color="error"
                        >
                          삭제
                        </Button>
                      ) : (
                        <></>
                      )}
                      <Box
                        className="postViewCount"
                        display="flex"
                        margin="1%"
                        alignItems="center"
                      >
                        <VisibilityIcon color="disabled" />
                        <Typography>{postData.readCount}</Typography>
                      </Box>
                      <Box
                        className="postLikeCount"
                        display="flex"
                        alignItems="center"
                        margin="1%"
                      >
                        <Box onClick={handleLikeClick} margin="1%">
                          {likeClick ? (
                            <FavoriteIcon
                              color="info"
                              onClick={() => {
                                setPostLikeCount(postLikeCount - 1);
                              }}
                            />
                          ) : (
                            <FavoriteBorderIcon
                              color="disabled"
                              onClick={() => {
                                setPostLikeCount(postLikeCount + 1);
                              }}
                            />
                          )}
                        </Box>
                        <Typography>{postLikeCount}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="postTitleFooter" display="flex"></Box>
                </Box>
                <Divider />
                <Grid container spacing={2} marginTop="1%">
                  <Grid item xs={12} sm={12} md={3} className="stayList">
                    <Box sx={{ p: 2, display: "grid" }}>
                      <Typography margin="1%" fontWeight="bold">
                        내가 고른 숙소
                      </Typography>
                      <CardContent>
                        {postStayList.map((postStay) => (
                          <Typography>{postStay.name}</Typography>
                        ))}
                      </CardContent>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} clanssName="attractionList">
                    <Box sx={{ p: 2, display: "grid" }}>
                      <Typography margin="1%" fontWeight="bold">
                        내가 고른 관광지
                      </Typography>
                      <CardContent>
                        {postAttractionList.map((postAttraction) => (
                          <Typography>{postAttraction.name}</Typography>
                        ))}
                      </CardContent>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} className="rentcarList">
                    <Box sx={{ p: 2, display: "grid" }}>
                      <Typography margin="1%" fontWeight="bold">
                        내가 고른 렌터카
                      </Typography>
                      <CardContent>
                        {postRentCarList.map((postRentCar) => (
                          <Typography>{postRentCar.companyName}</Typography>
                        ))}
                      </CardContent>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} className="trainList">
                    <Box sx={{ p: 2, display: "grid" }}>
                      <Typography margin="1%" fontWeight="bold">
                        내가 고른 기차
                      </Typography>
                      <CardContent>
                        {postTrainList.map((postTrain) => (
                          <Box display="flex">
                            <Typography>{postTrain.depplacename}</Typography>
                            <Typography fontWeight="bold">→</Typography>
                            <Typography>{postTrain.arrplacename}</Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Box>
                  </Grid>
                </Grid>
                <Typography padding="1%">{postData.contents}</Typography>
                <Divider />
                <Reply postId={postProps.state.postId} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Divider />
                <Typography margin="5%" color="info" fontWeight="bold">
                  추천 게시글
                </Typography>
                <HotPostCardView />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default PostDetail;
