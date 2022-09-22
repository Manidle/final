import { Typography } from "@mui/material";
import React from "react";
const TextProperty = ({ children }) => {
  return (
    <Typography textAlign="center" fontWeight="light" padding="5px">
      {children}
    </Typography>
  );
};
export default TextProperty;
