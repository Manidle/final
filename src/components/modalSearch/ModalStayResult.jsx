import {
  Button,
  Container,
  createTheme,
  ListItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ModalStayResult = () => {
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

  // stay 리스트
  const [stayLists, setStayLists] = useState([]);

  // stay 전체 조회
  function searchStayAll() {
    axios
      .get("http://localhost:8080/api/auth/v1/list/stay", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setStayLists(response.data);
        console.log(stayLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    searchStayAll();
    sessionStorage.removeItem("stayData");
  }, []);

  // stay 검색어
  const [searchWord, setSearchWord] = useState("");
  // stay 검색 조회
  function searchStay() {
    axios
      .get(
        `http://localhost:8080/api/auth/v1/filter/list/stay/search?search=${searchWord}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        setStayLists(response.data);
        console.log(stayLists);
      });
  }

  function listClick(stayList) {
    console.log(stayList);
    sessionStorage.setItem("stayData", JSON.stringify(stayList));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box className="modalSearch">
          <TextField
            placeholder="숙소를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <Button
            className="staySearchButton"
            onClick={() => {
              searchStay();
            }}
          >
            검색
          </Button>
        </Box>
        <Box
          maxHeight="32vh"
          margin="5px"
          overflow="auto"
          border="1px"
          borderColor="secondary"
        >
          {stayLists.length === 0 ? (
            <Box>숙소가 없습니다.</Box>
          ) : (
            stayLists.map((stayList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={stayList.stayId}
                onClick={() => {
                  listClick(stayList);
                }}
              >
                <Typography>숙소 이름: {stayList.name}</Typography>
                <Typography>숙소 주소: {stayList.address}</Typography>
                <Typography>숙소 상세주소: {stayList.detailAddress}</Typography>
                <Typography>숙소 좋아요 수: {stayList.likeCount}</Typography>
              </ListItem>
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ModalStayResult;
