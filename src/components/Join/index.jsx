import React, { useRef } from "react";
import {
  BtnJoin,
  Container,
  Header,
  Input,
  Left,
  Right,
  Wrapper,
} from "./style";
import emailjs from "@emailjs/browser";

export const Join = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm(
        "service_pw40pr7",
        "template_35ggkpb",
        form.current,
        "rd6QMVlonDICPdd94"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Left>
        <hr />
        <Header>
          <Header.Stroke>Ready to</Header.Stroke> Level up
        </Header>
        <Header>
          Your Body <Header.Stroke>With us</Header.Stroke>
        </Header>
      </Left>
      <Right>
        <Wrapper ref={form} onSubmit={sendEmail}>
          <Input
            name="user_email"
            type="email"
            placeholder="Enter your Email address"
            required
          />
          <BtnJoin type="submit">Join Now</BtnJoin>
        </Wrapper>
      </Right>
    </Container>
  );
};
