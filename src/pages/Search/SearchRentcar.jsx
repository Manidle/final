import {
  Box,
  Card,
  Container,
  createTheme,
  Grid,
  ListItem,
  Pagination,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../baseUrl";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import usePagination from "../../components/Pagination";
import RentCarItem from "./RentCarItem";

const SearchRentcar = () => {
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

  // 렌트카 리스트
  const [rentcarLists, setRentcarLists] = useState([]);

  // 렌트카 검색어
  const [searchRentcar, setSearchRentcar] = useState("");

  function searchAllRentcar() {
    axios
      .get(BASE_URL + "/api/auth/v1/list/rentcar", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setRentcarLists(response.data);
        console.log(rentcarLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    searchAllRentcar();
  }, []);

  // 렌트카 페이징
  const [page, setPage] = useState(1);
  const perPage = 8;
  const count = Math.ceil(rentcarLists.length / perPage);
  const rentcarListsPerPage = usePagination(rentcarLists, perPage);

  const handlePage = (e, p) => {
    setPage(p);
    rentcarListsPerPage.jump(p);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="rentcar" />
        <Stack>
          <TextField
            onChange={(e) => {
              setSearchRentcar(e.target.value);
            }}
          />
        </Stack>
        <Box>
          <Box
            xs={{
              width: "10rem",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "7rem",
                paddingRight: "7rem",
              }}
            >
              {rentcarLists.length === 0 ? (
                <Card>렌트카가 없습니다.</Card>
              ) : (
                rentcarListsPerPage.currentData().map((rentcarList) => (
                  <Grid item xs={3}>
                    <RentCarItem rentcar={rentcarList} />{" "}
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Box>
        <Stack>
          <Pagination
            size="small"
            count={count}
            boundaryCount={2}
            onChange={handlePage}
            sx={{
              margin: "auto",
            }}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default SearchRentcar;
