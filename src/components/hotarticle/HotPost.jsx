import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";

const HotPost = ({ article }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "10px",
          alignItems: "center",
        }}
      >
        <Typography noWrap color="#892CDC">
          {article.location}
        </Typography>
        <Typography noWrap fontWeight="bold" marginLeft={1}>
          {article.title}
        </Typography>
      </div>
      <div
        style={{
          width: "60px",
          display: "flex",
          color: "#892CDC",
          margin: "10px",
        }}
      >
        <FavoriteIcon />
        <Typography>{article.likes}</Typography>
      </div>
    </Box>
  );
};

export default HotPost;
