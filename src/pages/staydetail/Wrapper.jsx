import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const Wrapper = ({ children, bgColor }) => {
  return (
    <Card
      variant
      sx={{
        backgroundColor: bgColor,
        margin: "1rem",
        borderRadius: 3,
        padding: "2rem",
        marginRight: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></Box>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Wrapper;
