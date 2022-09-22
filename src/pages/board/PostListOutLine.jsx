import { Box } from "@mui/material";
import React from "react";

const PostListOutLine = ({ children }) => {
  return (
    <Box
      sx={{
        border: "2px dashed #F2E2FC",
        marginBottom: 2,
        borderRadius: 3,
        padding: 1,
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

export default PostListOutLine;
