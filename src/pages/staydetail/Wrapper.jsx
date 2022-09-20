import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <Card
      variant
      sx={{
        backgroundColor: "#F2E2FC",
        marginBottom: 2,
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
