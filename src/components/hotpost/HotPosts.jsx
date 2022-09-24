import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";

const HotPosts = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });

  const [hotPosts, setHotPosts] = useState([]);

  function getHotPosts() {
    axios
      .get(`http://localhost:8080/api/v1/filter/list/post/desc/top`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setHotPosts(response.data);
      });
  }

  useEffect(() => {
    getHotPosts();
  }, []);

  const navigate = useNavigate();

  function handler(props) {
    navigate(`post/${props}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box marginTop="3%">
          <Box display="flex" marginLeft="6%" alignItems="center">
            <FavoriteIcon color="info" />
            <Typography fontSize="25px" fontWeight="bold" marginLeft="10px">
              핫한 게시글
            </Typography>
          </Box>
          <Grid container spacing={2} padding="0px 5% 0px 5%">
            {hotPosts.map((hotPost) => (
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  onClick={() => {
                    handler(hotPost.postId);
                  }}
                >
                  <Box display="flex" margin="3%">
                    <Typography
                      fondWeight="bold"
                      color="info"
                      marginRight="20px"
                    >
                      {hotPost.boardId}
                    </Typography>
                    <Typography fontWeight="bold">{hotPost.title}</Typography>
                  </Box>
                  <Box display="flex" marginRight="2%">
                    <FavoriteIcon color="info" />
                    <Typography>{hotPost.likeCount}</Typography>
                  </Box>
                </Box>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HotPosts;
