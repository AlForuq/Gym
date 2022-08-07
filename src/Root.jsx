import React from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { Plan } from "./components/Plan";
import { Programs } from "./components/Programs";
import { Reasons } from "./components/Reasons";
import { Testimonial } from "./components/Testimonial";
import { Container } from "./RootStyle";

export const Root = () => {
  return (
    <div className="center nocopy" >
      <Container className="App" >
        <Hero />
        <Programs />
        <Reasons />
        <Plan />
        <Testimonial />
        <Join />
        <Footer/>
      </Container>
    </div>
  );
};
