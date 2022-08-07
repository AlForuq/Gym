import React, { useState } from "react";
import {
  Container,
  Desc,
  Intro,
  Job,
  Left,
  Image,
  Name,
  QuestionTitle,
  Right,
  Span,
  Icons,
} from "./style";
import { testimonialsData } from "../../data/testimonialsData";

export const Testimonial = () => {
  // eslint-disable-next-line
  const [state, setState] = useState(0);

  const Increment = () => {
    if (state < 2) {
      setState(state + 1);
    } else {
      setState((curent)=> state - curent)
    }
  };
 
  const Decrement = () => {
     
    if (state > 0) {
      setState(state - 1);
    }
    else {
      setState(state+2)
    }
  };
console.log(state);
  return (
    <Container>
      <Left>
        <Intro>TESTIMONIALS</Intro>
        <Span>WHAT THEY</Span>
        <QuestionTitle>SAY ABOUT US</QuestionTitle>
        <Desc>{testimonialsData[state].review}</Desc>
        <Name>
          {testimonialsData[state].name}
          {" -- "}
          <Job>{testimonialsData[state].status}</Job>
        </Name>
      </Left>
      <Right>
        <div></div>
        <div></div>
        <Image src={testimonialsData[state].image} />
        <Icons>
          <Icons.Left onClick={Decrement} />
          <Icons.Right onClick={Increment} />
        </Icons>
      </Right>
    </Container>
  );
};
