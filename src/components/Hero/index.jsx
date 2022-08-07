import React from "react";
import { Header } from "../Header";
import {
  Best,
  Box,
  BtnJoin,
  Button,
  ButtonWrapper,
  Calorie,
  CalorieWrapper,
  CaloryImage,
  Figures,
  HeroContainer,
  ImageBack,
  ImageHero,
  Left,
  Right,
  Text,
  Title,
  TitleSpan,
} from "./style";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";

export const Hero = () => {
  const Heart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="red"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
  return (
    <HeroContainer>
      <Left>
        <Header />
        <Best>
          <Best.Div></Best.Div>
          <Best.Span>The best fitness club in the town</Best.Span>
        </Best>

        <Title.Wrapper>
          <Title>
            <TitleSpan>SHAPE</TitleSpan> YOUR
          </Title>
          <Title>IDEAL BODY</Title>

          <Text>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </Text>
        </Title.Wrapper>

        <Figures>
          <Figures.Wrapper>
            <Figures.Num>+ 140</Figures.Num>
            <Figures.Info>EXPERT COACHES</Figures.Info>
          </Figures.Wrapper>

          <Figures.Wrapper>
            <Figures.Num>+ 978</Figures.Num>
            <Figures.Info>MEMBER JOINED</Figures.Info>
          </Figures.Wrapper>

          <Figures.Wrapper>
            <Figures.Num>+ 50</Figures.Num>
            <Figures.Info>FITNESS PROGRAMS</Figures.Info>
          </Figures.Wrapper>
        </Figures>

        <ButtonWrapper>
          <Button>Get Started</Button>
          <Button transparent >Learn More</Button>
        </ButtonWrapper>
      </Left>
      <Right>
        <BtnJoin>Join Now</BtnJoin>

        <Box>
          {Heart}
          <Figures.Info>Heart Rate</Figures.Info>
          <Box.Info>116 bpm</Box.Info>
        </Box>

        <ImageHero src={hero_image} />
        <ImageBack src={hero_image_back} />

        <CalorieWrapper>
          <CaloryImage src={Calories} />

          <Calorie>
            <Figures.Info>Calories burned</Figures.Info>
            <Box.Info>220 kcal</Box.Info>
          </Calorie>
        </CalorieWrapper>
      </Right>
    </HeroContainer>
  );
};
