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
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "react-date-range";

const ModalTrainResult = () => {
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

  // train 리스트
  const [trainLists, setTrainLists] = useState([]);

  // train 출발지, 도착지
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
        `http://localhost:8080/api/auth/v1/filter/list/train/dep/arr?endPoint=${searchEndPoint}&startPoint=${searchStartPoint}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        setTrainLists(response.data);
        handleCalendar();
        console.log(searchStartPoint);
        console.log(searchEndPoint);
        console.log(trainLists);
        console.log(date);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(searchStartPoint);
        console.log(searchEndPoint);
        console.log(trainLists);
        console.log(date);
      });
  }

  function listClick(trainList) {
    console.log(trainList);
    sessionStorage.setItem("trainData", JSON.stringify(trainList));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box className="modalSearch">
          <TextField
            placeholder="출발지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchStartPoint(e.target.value);
            }}
          />
          <TextField
            placeholder="도착지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchEndPoint(e.target.value);
            }}
          />
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
              minDate={new Date()}
            />
          )}
          ;
          <Button
            className="trainSearchButton"
            onClick={() => {
              searchTrain();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxHeight="32vh" margin="5px" overflow="auto">
          {trainLists.length === 0 ? (
            <Box>출발지와 도착지를 입력해 기차를 검색해보세요!</Box>
          ) : (
            trainLists.map((trainList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={trainList.trainId}
                onClick={() => {
                  listClick(trainList);
                }}
              >
                <Typography>출발지: {trainList.startPonint}</Typography>
                <Typography>---›</Typography>
                <Typography>도착지: {trainList.endPoint}</Typography>
                <Typography>출발시각: {trainList.departureTime}</Typography>
                <Typography>---›</Typography>
                <Typography>도착시각: {trainList.arriveTime}</Typography>
                <Typography>요금: {trainList.trainPrice}</Typography>
                <Typography>좋아요 수 : {trainList.likeCount}</Typography>
              </ListItem>
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ModalTrainResult;
