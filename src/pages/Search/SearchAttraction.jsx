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
import React, { useEffect } from "react";
import { useState } from "react";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import AttractionItem from "./AttractionItem";
import Bar from "./Bar";
import AttractionColumn from "./Column/AttractionColumn";

const SearchAttraction = () => {
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

  const [attractions, setAttractions] = useState([]);

  function searchAllAttraction() {
    axios
      .get("http://localhost:8080/api/auth/v1/list/attraction", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setAttractions(response.data);
        console.log(response.data);
      });
  }

  useEffect(() => {
    searchAllAttraction();
  }, []);

  // 검색어
  const [searchAttraction, setSearchAttraction] = useState("");

  function searchFilterAttraction() {
    axios
      .get(
        `http://localhost:8080/api/filter/list/attraction?search=${searchAttraction}`
      )
      .then((response) => {
        setAttractions(response.data);
        console.log(searchAttraction);
      })
      .catch(function (error) {
        console.log(error.response);
        console.log(searchAttraction);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="attraction" />

        <Bar
          setSearchAttraction={setSearchAttraction}
          searchFilterAttraction={searchFilterAttraction}
        />

        <Box>
          <AttractionColumn />
          {attractions.length === 0 ? (
            <Box>관광지가 없습니다.</Box>
          ) : (
            attractions.map((attraction) => (
              <AttractionItem attraction={attraction} />
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SearchAttraction;