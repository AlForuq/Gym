import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
 
`;

export const Left = styled.div`
  flex: 3;
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Best = styled.div`
  padding: 20px 13px;
  background-color: #222;
  color: white;
  width: fit-content;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 3rem;

  position: relative;
`;

Best.Div = styled.div`
  background-color: orange;
  width: 5.4rem;
  height: 80%;
  border-radius: 3rem;

  position: absolute;
  left: 8px;

  z-index: 1;
`;

Best.Span = styled.span`
  z-index: 2;
  text-transform: uppercase;
`;

export const Title = styled.div`
  font-size: 4.5rem;
  font-weight: 600;
  color: white;
  font-family: sans-serif;
`;

export const TitleSpan = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

Title.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: sans-serif;
`;

export const Text = styled.div`
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  width: 80%;
`;

export const Figures = styled.div`
  display: flex;
  gap: 2rem;
`;

Figures.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-family: sans-serif;
`;

Figures.Num = styled.span`
  font-size: 2rem;
  color: white;
`;

Figures.Info = styled.span`
  color: var(--gray);
  font-family: sans-serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: fit-content;
`;

export const Button = styled.button`
  width: 8rem;
  color: white;
  padding: 8px;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#f48915"};
  border: ${({ transparent }) =>
    transparent ? "2px solid #f48915" : "2px solid transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 300ms all;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  :active {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

export const Right = styled.div`
  position: relative;
  color: white;
  flex: 1;

  background-color: var(--orange);
`;

export const BtnJoin = styled.button`
  width: 84px;
  height: 40px;
  background-color: white;
  color: black;
  border: none;
  font-family: sans-serif;
  /* font-size:16px; */
  font-weight: bolder;

  position: absolute;
  right: 3rem;
  top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: fit-content;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  background-color: var(--darkGrey);

  /* box-sizing:border-box; */

  position: absolute;
  right: 4rem;
  top: 7rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: start;

  /* &:nth-child(3){
    color:white;
    font-size: 2.5rem;
  } */
`;

Box.Info = styled.div`
  color: white;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

export const ImageHero = styled.img`
  position: absolute;
  top: 10rem;
  left: -50%;
  width: 23rem;
  z-index:2;
`;

export const ImageBack = styled.img`
  position: absolute;
  top: 4rem;
  left: -70%;
  z-index:1;
  width: 15rem;
`;


 
export const CalorieWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding:1rem;

  width: fit-content;
  border-radius:5px;

  background-color: var(--caloryCard);

  position:absolute;
  top:32rem;
  right: 28rem;
`; 

export const Calorie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;
`;

export const CaloryImage = styled.img` 
width: 3rem;
`