import React from "react";
import { programsData } from "../../data/programsData";
import {
  Header,
  Info,
  JoinNow,
  ProgramContainer,
  ProgramDataWrapper,
  SvgIcon,
  Title,
  Wrapper,
} from "./style";
import RtArrow from "../../assets/rightArrow.png";
export const Programs = () => {
  return (
    // <div className="center" >
    <ProgramContainer>
      <Header>
        <Header.Stroke>Explore our</Header.Stroke>
        <div>Programs</div>
        <Header.Stroke>To shape you</Header.Stroke>
      </Header>

      <Wrapper>
        {programsData.map((value) => (
          <ProgramDataWrapper>
            <SvgIcon>{value.image}</SvgIcon>
            <Title>{value.heading}</Title>
            <Info>{value.details}</Info>
            <JoinNow>
              <JoinNow.Text>Join Now</JoinNow.Text>
              <JoinNow.Index src={RtArrow} />
            </JoinNow>
          </ProgramDataWrapper>
        ))}
      </Wrapper>
    </ProgramContainer>
    // </div>
  );
};
