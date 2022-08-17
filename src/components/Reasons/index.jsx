import React from "react";
import {
  Intro,
  Left,
  Options,
  PartnerLogo,
  PartnerText,
  PartnerWrapper,
  QuestionTitle,
  ReasonsContainer,
  Right,
  Span,
} from "./style";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

export const Reasons = () => {
  return (
    <ReasonsContainer id="reasons">
      <Left>
        <Left.Img1 src={image1} />
        <Left.Img2 src={image2} />
        <Left.Img3 src={image3} />
        <Left.Img4 src={image4} />
      </Left>
      <Right>
        <Intro>SOME REASONS</Intro>
        <QuestionTitle>
          <Span>WHY</Span> CHOOSE US?
        </QuestionTitle>
        <Options.Container>
          <Options.Wrapper>
            <Options.Img src={tick} />
            <Options>OVER 140+ EXPERT COACHS</Options>
          </Options.Wrapper>
          <Options.Wrapper>
            <Options.Img src={tick} />
            <Options>TRAIN SMARTER AND FASTER THAN BEFORE</Options>
          </Options.Wrapper>
          <Options.Wrapper>
            <Options.Img src={tick} />
            <Options>1 FREE PROGRAM FOR NEW MEMBER</Options>
          </Options.Wrapper>
          <Options.Wrapper>
            <Options.Img src={tick} />
            <Options>RELIABLE PARTNERS</Options>
          </Options.Wrapper>
        </Options.Container>

        <PartnerWrapper>
          <PartnerText>OUR PARTNERS</PartnerText>
          <PartnerLogo>
            <img alt="" src={nb} />
            <img alt="" src={adidas} />
            <img alt="" src={nike} />
          </PartnerLogo>
        </PartnerWrapper>
      </Right>
    </ReasonsContainer>
  );
};
