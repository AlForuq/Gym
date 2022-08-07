import styled from "styled-components";
import { BsArrowLeft as Arrow } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-family: sans-serif;
  font-weight: 700;
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
  line-height: 2rem;
  color: white;
  font-weight: 400;
  /* font-family:nor; */
  font-size: 20px;
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

  > :nth-child(1) {
    position: absolute;
    width: 17rem;
    height: 20rem;
    border: 2px solid orange;
    right: 9rem;
    top: 1rem;
  }

  > :nth-child(2) {
    position: absolute;
    width: 17rem;
    height: 20rem;
    background-color: var(--darkOrange);
    right: 7rem;
    top: 3rem;
  }
`;

export const Image = styled.img`
    position: absolute;
    width:17rem;
    height: 20rem;
    object-fit:cover;
    right:8rem;
    top:2rem;
`;


export const Icons = styled.div`
    display:flex;
    gap: 1rem;

    font-size: 35px;
    color:white;
    
    
    position: absolute;
    bottom: -1rem;
    left: 4rem;

`

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
