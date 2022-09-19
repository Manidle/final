import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const Wrapper = ({ name, children, onClick }) => {
  return (
    <Card
      variant
      sx={{
        backgroundColor: "#F2E2FC",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
        marginBottom: 2,
        borderRadius: 3,
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography padding={2}>{name}</Typography>
        <CardActions>
          <Button sx={{ color: "#892CDC", fontSize: 18 }} onClick={onClick}>
            전체 보기
          </Button>
        </CardActions>
      </Box>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Wrapper;
