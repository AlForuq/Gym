import styled from "styled-components";
import { BsArrowLeft as Arrow } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-family: sans-serif;
  font-weight: 700;

  @media (max-width: 768px) {

    > :nth-child(2) {
      font-size: 2rem;
    }
    > :nth-child(3) {
      font-size: 2rem;
    }
  }
`;

export const Intro = styled.div`
  color: var(--darkOrange);
`;

export const QuestionTitle = styled.div`
  font-size: 3rem;
  color: white;
`;

export const Span = styled.span`
  font-size: 3rem;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Desc = styled.div`
  word-spacing: 1rem;
  letter-spacing:3px;
  line-height: 2rem;
  color: white;
  font-weight: 500;
  font-size: 16px;
  font-family: Inter, sans-serif;

  position:sticky;

  animation-name: Desc;
  animation-duration: 1s;

  @keyframes Desc {
    0% {
      transform: translate(-50%);
      opacity: 0.7;
    }
    50% {
      transform: translate(5%);
    }
    100% {
      transform: translate(0%);
    }
  }
`;

export const Name = styled.span`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: var(--darkOrange);
  font-weight: normal;
`;

export const Job = styled.span`
  color: white;
`;

export const Right = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > :nth-child(1) {
      display: none;
    }
    > :nth-child(2) {
      display: none;
    }

    > :nth-child(3) {
      top: 0;
      right: 0;
      position: relative; 
      align-self: center;
      
    }
    > :nth-child(4) {
      position: relative;
      top: 0;
      left: 5rem;
    }
  }

  > :nth-child(1) {
    position: absolute;
    width: 17rem;
    height: 20rem;
    border: 2px solid orange;
    right: 9rem;
    top: 1rem;

    animation-name: squre;
    animation-duration: 2s;
    /* animation-timing-function: ease-in-out; */

    @keyframes squre {
      0% {
        right: 25rem;
      }
      50% {
        right: 8.7rem;
      }
      100% {
        right: 9rem;
      }
    }
  }

  > :nth-child(2) {
    position: absolute;
    width: 17rem;
    height: 20rem;
    background: var(--planCard);
    right: 7rem;
    top: 3rem;

    animation-name: yuza;
    animation-duration: 2s;
    animation-timing-function: linear;

    @keyframes yuza {
      0% {
        right: 0px;
      }
      50% {
        right: 7.3rem;
      }
      100% {
        right: 7rem;
      }
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 17rem;
  height: 20rem;
  object-fit: cover;
  right: 8rem;
  top: 2rem;

  animation-name: Image;
  animation-duration: 1s;

  @keyframes Image {
    0% {
      right: 2rem;
      opacity: 0.7;
    }
    50% {
      right: 8.2rem;
      opacity: 1;
    }
    100% {
      right: 8rem;
    }
  }
  @media (max-width: 768px) {
    @keyframes Image {
      0% {
        right: -1rem;
        opacity: 0.7;
      }
      50% {
        right: 1rem;
        opacity: 1;
      }
      100% {
        right: 0rem;
      }
    }
  }
`;


export const Icons = styled.div`
  display: flex;
  gap: 1rem;

  font-size: 35px;
  color: white;

  position: absolute;
  top: 20rem;
  left: 4rem;

  @media (max-width: 768px) {
  }
`;

Icons.Left = styled(Arrow)`
    cursor: pointer;
    :hover{
        transform: scale(1.1);
        color: orange;
    }

    :active{
        transform:scale(0.97)
    }

`;
 
 Icons.Right = styled(Icons.Left)`
   transform: rotate(180deg);
   :hover {
     transform: scale(1.1) rotate(180deg);
   }

   :active {
     transform: scale(0.97) rotate(180deg);
   }
 `;
