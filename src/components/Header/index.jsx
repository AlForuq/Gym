import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  HeaderContainer,
  HeroBlur,
  Img,
  Li,
  MenuIcon,
  Ul,
  Wrapper,
} from "./style";
import { Link } from "react-scroll";

export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [barClosed, setBarClosed] = useState(true);

  return (
    <HeaderContainer>
      <HeroBlur className="blur" />
      <Img src={Logo} />
      {mobile ? (
        <Wrapper barClosed={barClosed}>
          {barClosed ? (
            <MenuIcon onClick={() => setBarClosed(false)} />
          ) : (
            <Ul>
              <Link
                to="home"
                span={true}
                smooth={true}
                onClick={() => setBarClosed(true)}
              >
                <Li>Home</Li>
              </Link>

              <>
                <Link
                  to="programs"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <Li>Programs</Li>
                </Link>
              </>
              <>
                <Link
                  to="reasons"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <Li>Why Us</Li>
                </Link>
              </>
              <>
                <Link
                  to="plans"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <Li>Plans</Li>
                </Link>
              </>
              <>
                <Link
                  to="testimonials"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <Li>Testimonials</Li>
                </Link>
              </>
            </Ul>
          )}
        </Wrapper>
      ) : (
        <Ul>
          <Li>Home</Li>
          <Li>Programs</Li>
          <Li>Why us</Li>
          <Li>Plans</Li>
          <Li>Testimonials</Li>
        </Ul>
      )}
    </HeaderContainer>
  );
};
