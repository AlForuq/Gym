import React from "react";
import {
  PlanContainer,
  Header,
  PlansData,
  Wrapper,
  Title,
  Features,
  Price,
  See,
  Button,
  PlanBlur,
} from "./style";
import { plansData } from "../../data/plansData";

import ArRight from '../../assets/rightArrow.png'

export const Plan = () => {
  return (
    <PlanContainer id="plans">
      <PlanBlur className="blur" />
      <PlanBlur className="blur" />
      <Header>
        <Header.Stroke>READY TO START</Header.Stroke>
        <div>YOUR JOURNEY</div>
        <Header.Stroke>NOW WITHUS</Header.Stroke>
      </Header>

      <Wrapper className="Wrapper">
        {plansData.map((value) => (
          <PlansData key={value.name} className="planData">
            {value.icon}
            <Title>{value.name}</Title>
            <Price>$ {value.price}</Price>
            <Features>
              <Features.Wrapper>
                <Features.Icon />
                <Features.Text>{value.features.one}</Features.Text>
              </Features.Wrapper>

              <Features.Wrapper>
                <Features.Icon />
                <Features.Text>{value.features.two}</Features.Text>
              </Features.Wrapper>

              <Features.Wrapper>
                <Features.Icon />
                <Features.Text>{value.features.three}</Features.Text>
              </Features.Wrapper>
            </Features>

            <Features.Wrapper>
              <See>See More Benefits</See>
              <img alt="" width={"15px"} height={"15px"} src={ArRight} />
            </Features.Wrapper>

            <Button className="btn">Join Now</Button>
          </PlansData>
        ))}
      </Wrapper>
    </PlanContainer>
  );
};
