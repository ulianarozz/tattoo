import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section>
      <div className="container header__container">
        <h1>Uliana</h1>
        <h5 className="text-light">Tattoo Artist</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#portfolio" className="scroll__down">
          Scroll to see my work
        </a>
      </div>
    </section>
  );
};

export default Header;
