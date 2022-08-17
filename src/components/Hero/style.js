import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;

  /* justify-content: space-between; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 3;
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
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

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 0rem;
    align-self: center;
  }
`;

Best.Div = styled.div`
  background-color: var(--darkOrange);
  width: 5.4rem;
  height: 80%;
  border-radius: 3rem;

  position: absolute;
  left: 8px;

  z-index: 1;

  animation-name: example;
  animation-duration: 3s;
  animation-delay: 1s;
  /* animation-iteration-count: infinite; */
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  @keyframes example {
    0% {
      left: 8px;
      /* top: 6px; */
    }
    50% {
      left: 200px;
      top: 6px;
    }
    100% {
      left: 8px;
      top: 6px;
    }
  }

  @media (max-width: 768px) {
    @keyframes example {
      0% {
        left: 8px;
        /* top: 6px; */
      }
      50% {
        left: 140px;
        top: 6px;
      }
      100% {
        left: 8px;
        top: 6px;
      }
    }
  }
`;

Best.Span = styled.span`
  z-index: 2;
  text-transform: uppercase;
`;

export const Title = styled.div`
  font-size: 4.5rem;
  font-weight: 600;
  width: fit-content;
  color: white;
  font-family: sans-serif;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: xx-large;
    align-self: center;
  }
`;

export const TitleSpan = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

Title.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1.5rem;
  font-family: sans-serif;
`;

export const Text = styled.div`
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  width: 80%;

  @media (max-width: 768px) {
    text-align: center;
    font-size: small;
    letter-spacing: 1px;
    align-self: center;
  }
`;

export const Figures = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
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
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    font-size: large;
  }
`;

Figures.Info = styled.span`
  color: var(--gray);
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: small;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    background: none;
  }
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

  animation-name: Box;
  animation-duration: 4s;

  @keyframes Box {
    0% {
      right: -1rem;
    }
    50% {
      right: 5rem;
    }
    100% {
      right: 4rem;
    }
  }

  @media (max-width: 768px) {
    left: 1rem;
    top: 2rem;
  }
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
  z-index: 2;

  @media (max-width: 768px) {
    position:relative;
    width:15rem;
    left:7rem;
    top:5rem;
    align-self:center;


  }
`;

export const ImageBack = styled.img`
  position: absolute;
  top: 4rem;
  left: -70%;
  z-index: 1;
  width: 15rem;

  animation-name: ImageBack;
  animation-duration: 4s;

  @keyframes ImageBack {
    0% {
      left: -50%;
    }
    50% {
      left: -80%;
    }
    100% {
      left: -70%;
    }
  }

  @media (max-width: 768px) {
    width: 15rem;
    left: 2rem;
    top: 0rem;
    z-index:-1; 
  }
`;

export const CalorieWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;

  width: fit-content;
  border-radius: 5px;

  background-color: var(--caloryCard);

  position: absolute;
  top: 32rem;
  right: 28rem;

  animation-name: Calory;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;

  @keyframes Calory {
    0% {
      right: 35rem;
    }
    100% {
      right: 28rem;
    }
  }

  @media (max-width: 768px) {
    position:relative;
    top: 5rem;
    left: 2rem;
  }
`;

export const Calorie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;

  @media (max-width: 768px) {
    > :nth-child(2) {
      font-size: 1rem;
    }
  }
`;

export const CaloryImage = styled.img`
  width: 3rem;

  @media (max-width: 768px) {
    width: 2rem;
  }
`;
