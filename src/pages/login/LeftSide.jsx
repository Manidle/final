import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LeftSide = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "40vh",
        left: "10vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight="bolder" fontSize="3.5rem" fontColor="#3D3D3D">
        Tell Me Your Trip!
      </Typography>
      <Typography fontSize="2rem" fontWeight="normal" fontColor="#3D3D3D">
        PLANNERGRAM
      </Typography>
      <Typography fontSize="1.5rem" fontWeight="bold" fontColor="whitesmoke">
        travel community
      </Typography>
    </Box>
  );
};

export default LeftSide;
