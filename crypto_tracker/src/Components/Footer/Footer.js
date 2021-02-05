import React from "react";
import { FooterContainer, FooterLink } from "../../Styles/styled";
// import "./Footer.css";

export const Footer = () => {
  return (
    <FooterContainer className="footer">
      <FooterLink href="https://github.com/stephentanksley">Github</FooterLink>
      <FooterLink href="https://linkedin.com/in/stephentanksley">
        LinkedIn
      </FooterLink>
      <FooterLink href="mailto: stephen.tanksley@gmail.com?subject=Greenfire.io Assessment Feedback">
        Email Me
      </FooterLink>
      <FooterLink href="https://www.dropbox.com/s/zn76wchhgl17l24/Stephen%20Tanksley%20-%20Full%20Stack%20Software%20Engineer%20Resume.pdf?dl=0">
        Download My Resume
      </FooterLink>
    </FooterContainer>
  );
};
