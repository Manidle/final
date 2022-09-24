import React from "react";
import "./footer.css";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div className="copyRight">
      <FooterLeft />
      <FooterRight />
    </div>
  );
};

export default Footer;
