import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import { useEffect } from "react";

const MyPostAndLikeDetail = () => {
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

  const [myLikePosts, setMyLikePosts] = useState([]);

  const [myLikePostsBoardName, setMyLikePostsBoardName] = useState([]);
  const [myLikePostsTitle, setMyLikePostsTitle] = useState([]);
  const [myLikePostsPostId, setMyLikePostsPostId] = useState([]);
  const [myLikePostsLikeCount, setMyLikePostsLikeCount] = useState([]);

  const userData = jwt_decode(localStorage.getItem("token"));

  function getMyLikePostsId() {
    axios
      .get(
        `${BASE_URL}/api/auth/v1/list/currentuser/like/post/${userData.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log("1번");
        console.log(response.data);
      });
    //       .then((response) => {
    //         console.log(response.data);
    //         response.data.map((responsedata) =>
    //           axios
    //             .get(`${BASE_URL}/api/auth/v1/post/${responsedata.postId}`, {
    //               headers: {
    //                 Authorization: `${localStorage.getItem("token")}`,
    //                 "Content-Type": "application/json; charset=UTF-8",
    //               },
    //             })
    //             .then((response2) => {
    //               console.log(response2.data);
    //               console.log("엥");
    //               setMyLikePosts([...myLikePosts, response2.data]);
    //               //   setMyLikePostsBoardName(response2.data.boardName)
    //               //   setMyLikePostsTitle(response2.data.title)
    //               //   setMyLikePostsPostId(response2.data.postId)
    //               //   setMyLikePostsLikeCount(response2.data.likeCount)
    //             })
    //             .catch(function (error) {
    //               console.log(error);
    //               console.log(error.response2);
    //             })
    //         );
    //       })
    //       .then(() => {
    //         console.log(myLikePosts);
    //       })
    //       .catch(function (error) {
    //         console.log(error.response);
    //       });
  }

  function getMyLikePosts(props) {
    axios
      .get(`${BASE_URL}/api/auth/v1/post/${props.postId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("2번");
        console.log(response.data);
      });
  }

  function mapMyLikePosts(props) {
    setMyLikePosts([...myLikePosts, props]);
  }

  const getMylikePosts = async () => {
    const myLikePostsId = await getMyLikePostsId();

    Promise.all(
      myLikePostsId.map(async (myLikePostId) => {
        const myLikePostsData = await getMyLikePosts(myLikePostId);
        console.log(myLikePostsData);

        const myLikePosts = await mapMyLikePosts(myLikePostsData);
        console.log(myLikePosts);
      })
    );
    console.log(myLikePostsId);
  };

  //   useEffect(() => {
  //     getMyLikePosts();
  //   }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <DashboardMyInfo page="MY POST LIKE" />
        <Box>
          <Typography>내가 좋아요 누른 게시글</Typography>{" "}
        </Box>
        <Grid container spacing={2}>
          <Button onClick={() => getMylikePosts()}>test</Button>
          {/* {myLikePosts.map((myLikePost) => (
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Box>
                  <Typography>{myLikePost}</Typography>
                </Box>
              </Box>
            </Grid>
          ))} */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default MyPostAndLikeDetail;
