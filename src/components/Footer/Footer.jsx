import React from "react";
import FooterBottom from "../FooterBottom/FooterBottom";
import FooterTop from "../FooterTop/FooterTop";

const Footer = () => {
  return (
    <div className="bg-dark mt-20">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
