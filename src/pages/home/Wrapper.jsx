import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";

const Wrapper = ({ title, children, linkHandler }) => {
  return (
    <Card variant="outlined" sx={{ margin: "10px" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
        }
        action={
          <Typography
            variant="h5"
            color="#892CDC"
            fontWeight="bold"
            onClick={linkHandler}
          >
            더보기
          </Typography>
        }
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "40px 70px 0 40px",
        }}
      />
      {children}
    </Card>
  );
};

export default Wrapper;
