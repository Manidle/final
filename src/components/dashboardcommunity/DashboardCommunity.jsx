import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./Wrapper";
import DashboardDetail from "./DashboardDetail";
import { BASE_URL } from "../../baseUrl";

const regionAndCitiesList = [
  { region: "강원도1", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도2", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도3", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도4", citiList: ["속초", "강릉", "양양", "원주"] },
];

const DashboardCommunity = () => {
  const navigate = useNavigate();

  function handler(props) {
    navigate(`/board/${props}`);
  }

  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/board")
      .then((response) => {
        console.log("게시판데이터");
        setBoardData(response.data);
        console.log(boardData);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("마지막");
    console.log(boardData);
  }, []);

  return (
    <Box sx={{ padding: "10px" }}>
      <Wrapper>
        {regionAndCitiesList.map((regionAndCities) => {
          return <DashboardDetail regionAndCities={regionAndCities} />;
        })}
      </Wrapper>
    </Box>
  );
};

export default DashboardCommunity;
