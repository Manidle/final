import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";

const HotPost = ({ post, handleRoute }) => {
  return (
    <Box
      onClick={() => {
        handleRoute(`post/${post.postId}`);
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
          {post.boardName}
        </Typography>
        <Typography noWrap fontWeight="bold" marginLeft={1}>
          {post.title}
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
          {post.likeCount}
        </Typography>
      </div>
    </Box>
  );
};

export default HotPost;
