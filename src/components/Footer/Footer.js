import React from "react";
import "./Footer.scss";
import { Icon } from "@iconify/react";

// ICONS
import linkedinRect from "@iconify/icons-brandico/linkedin-rect";
import bxlGithub from "@iconify/icons-bx/bxl-github";
import codepenIcon from "@iconify/icons-mdi/codepen";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="icons-wrapper">
        <a
          href="https://www.linkedin.com/in/margaux-b%C3%A9du/"
          target="_blank"
        >
          <Icon icon={linkedinRect} className="icon" />
        </a>
        <a href="https://github.com/magb7" target="_blank">
          <Icon icon={bxlGithub} className="icon" />
        </a>
        <a href="https://codepen.io/magb7" target="_blank">
          <Icon icon={codepenIcon} className="icon" />
        </a>
      </div>
      <p>
        Made with <strong>Love</strong> by Margaux Bédu
      </p>
    </footer>
  );
};

export default Footer;
