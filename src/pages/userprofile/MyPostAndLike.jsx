import { Typography } from "@mui/material";
import React from "react";

const MyPostAndLike = ({ contents }) => {
  return (
    <Typography variant="body1" component="p">
      {contents}
    </Typography>
  );
};

export default MyPostAndLike;
