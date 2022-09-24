import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const FooterCenter = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Button
      id="basic-button"
      sx={{ display: { xs: "none", sm: "block" }, margin: "auto" }}
      color="secondary"
    >
      <img
        src="image/logo.png"
        alt="logo"
        className="logo"
        height="50px"
        width="50px"
        onClick={handleHome}
      />
    </Button>
  );
};

export default FooterCenter;
