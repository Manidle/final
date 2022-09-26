import { CalendarMonth } from "@mui/icons-material";
import { format } from "date-fns";
import {
  Box,
  Button,
  Container,
  createTheme,
  ListItem,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Calendar } from "react-date-range";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import { BASE_URL } from "../../baseUrl";
import Footer from "../../components/footer/Footer";

const SearchTrain = () => {
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

  //   // 기차 리스트
  //   const [trainLists, setTrainList] = useState([]);

  //   function searchAllTrain() {
  //     axios
  //       .get(BASE_URL + "/api/auth/v1/list/train", {
  //         headers: {
  //           Authorization: `${localStorage.getItem("token")}`,
  //           "Content-Type": "application/json; charset=UTF-8",
  //         },
  //       })
  //       .then((response) => {
  //         setTrainList(response.data);
  //         console.log(trainLists);
  //       });
  //   }

  //   useEffect(() => {
  //     searchAllTrain();
  //   }, []);

  //   // 전체 조회에서 사용될 검색어
  //   const [searchTrain, setSearchTrain] = useState("");

  // train 리스트
  const [trainLists, setTrainLists] = useState([]);

  // 출발지 도착지 검색어
  const [searchStartPoint, setSearchStartPoint] = useState("");
  const [searchEndPoint, setSearchEndPoint] = useState("");

  // 날짜 (기본값 오늘)
  const [date, setDate] = useState(new Date());
  // 달력 열기
  const [openCal, setOpenCal] = useState(false);
  const handleCalendar = () => {
    setOpenCal(!openCal);
  };

  // train 검색 조회
  function searchTrain() {
    axios
      .get(
        `${BASE_URL}/api/auth/v1/list/trainapi?date=${format(
          date,
          "yyyyMMdd"
        )}&end=${searchEndPoint}&start=${searchStartPoint}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        setTrainLists(response.data.response.body.items.item);
        console.log(response.data.response.body.items.item);
      })
      .then(() => {
        {
          openCal === true ? handleCalendar() : setOpenCal(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
        console.log(searchStartPoint);
        console.log(searchEndPoint);
        console.log(trainLists);
        console.log(format(date, "yyyyMMdd"));
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="train" />
        <Box display="flex" justifyContent="center">
          <TextField
            size="small"
            placeholder="출발지"
            onChange={(e) => {
              setSearchStartPoint(e.target.value);
            }}
          />
          <TextField
            size="small"
            placeholder="도착지"
            onChange={(e) => {
              setSearchEndPoint(e.target.value);
            }}
          />
          {/* 달력 */}
          <Box>
            <span
              onClick={() => {
                handleCalendar();
              }}
            >
              {`${format(date, "yyyy/MM/dd")}`}
            </span>
            {openCal && (
              <Calendar
                onChange={(item) => setDate(item)}
                date={date}
                dateDisplayFormat={"yyyy.mm.dd"}
              />
            )}
          </Box>
          <Button
            onClick={() => {
              searchTrain();
            }}
          >
            검색
          </Button>
        </Box>
        <Box>
          {trainLists.legth === 0 ? (
            <Box>기차가 없습니다.</Box>
          ) : (
            trainLists.map((trainList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={trainList.trainId}
              >
                <Typography>출발지: {trainList.depplacename}</Typography>
                <Typography>---›</Typography>
                <Typography>도착지: {trainList.arrplacename}</Typography>
                <Typography>출발시각: {trainList.depplandtime}</Typography>
                <Typography>---›</Typography>
                <Typography>도착시각: {trainList.arrplandtime}</Typography>
                <Typography>요금: {trainList.adultcharge}</Typography>
              </ListItem>
            ))
          )}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default SearchTrain;
