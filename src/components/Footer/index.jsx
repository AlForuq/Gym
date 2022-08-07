import React from "react";
import {
  Container,
  Github,
  Image,
  Instagram,
  LinkedIn,
  IconWrapper,
  Wrapper,
  FooterBlur,
} from "./style";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <Container>
      <FooterBlur className="blur" />
      <Wrapper>
        <IconWrapper>
          <a href="https://www.instagram.com/muhammad.alforuq" target="_blank">
            <Instagram />
          </a>
          <a href="https://github.com/AlForuq" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedIn />
          </a>
        </IconWrapper>
        <Image.Wrapper>
          <Image src={logo} />
        </Image.Wrapper>
      </Wrapper>
    </Container>
  );
};
