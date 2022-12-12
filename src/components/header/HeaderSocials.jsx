import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://instagram.com" target="_blank">
        {" "}
        <AiOutlineInstagram />
      </a>
      <a href="https://github.com" target="_blank">
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
