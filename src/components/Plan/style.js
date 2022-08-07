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
`;

Header.Stroke = styled.div`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
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

  /* '>' plays significant role */

  >:nth-child(1) {
    width: 3rem;
    height: 3rem;
    fill: var(--orange);
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
    background-color: var(--orange);
    transform: scale(1.1);
  }
  :active {
    background-color: var(--darkOrange);
    transform: scale(0.97);
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
`;

export const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

Features.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

Features.Icon = styled(BsCheck2Circle)`
  font-size: 2rem;
`;
Features.Text = styled.div`
  font-size: 18px;
`;


export const See = styled.div` 

`

export const Button = styled.div` 
  width:100%;
  height: 3rem;
  background-color: white;
  border: none;
  display:flex;
  align-items:center;
  justify-content:center;
  color: black;
  font-family:sans-sans-'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  border-radius: 10px;
  
`

export const PlanBlur = styled.div`
  width: 30rem;
  height: 30rem;
  left: 0;
`;

