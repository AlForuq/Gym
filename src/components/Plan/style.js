import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding: 0 2rem;

 
`;

export const Header = styled.div`
  display: flex;
  gap: 5rem;
  font-weight: 700;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  font-style: italic;

  @media (max-width:768px){
    flex-direction:column;
    font-size:x-large;
    gap:1rem;
    margin-top:1rem;
  }
`;

Header.Stroke = styled.div`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px){
    flex-direction:column;
  }
`;

export const PlansData = styled.div`
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--darkGrey);
  padding: 24px;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 768px) {
    width: auto;
    gap:1rem;
  }

  /* '>' plays significant role */

  > :nth-child(1) {
    width: 3rem;
    height: 3rem;
    fill: var(--orange);

    @media (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }
  /* > svg {
    width: 3rem;
    height: 3rem;
    fill: var(--orange);
  } */

  :hover > :nth-child(1) {
    fill: white;
  }
  /* :hover > svg {
    fill: white;  
  } */

  :hover {
    background: var(--planCard);
    transform: scale(1.1);
  }
  :active {
    background: var(--darkOrange);
    transform: scale(0.97);
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: auto;
    gap: 0.5rem;
  }
`;

Features.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height:fit-content;
  gap: 1rem;
`;

Features.Icon = styled(BsCheck2Circle)`
  font-size: 2rem !important;
`;


Features.Text = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


export const See = styled.div` 

`

export const Button = styled.div`
  width: 100%;
  height: 3rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: sans-sans- "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bold;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

export const PlanBlur = styled.div`
  width: 30rem;
  height: 30rem;
  left: 0;

  @media (max-width: 768px) {
    width: 14rem;
    left: 0rem;
  }
`;

