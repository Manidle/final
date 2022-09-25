import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";

const HotPost = ({ article, handleRoute }) => {
  return (
    <Box
      onClick={() => {
        handleRoute(`post/${article.postId}`);
      }}
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
        <Typography
          sx={{
            width: "50px",
            textAlign: "center",
          }}
        >
          {article.likes}
        </Typography>
      </div>
    </Box>
  );
};

export default HotPost;
