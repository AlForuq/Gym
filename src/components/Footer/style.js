import styled from "styled-components";
import { BsInstagram as Insta } from "react-icons/bs";
import { BsGithub as Git } from "react-icons/bs";
import { BsLinkedin as IN } from "react-icons/bs";

export const Container = styled.div`
    padding: 6rem 2rem;
    border-top: 2px solid white;
    margin-top: 2rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: fit-content;
`;

export const Instagram = styled(Insta)`
    font-size: 2.5rem;
    color:white;
`;

export const Github = styled(Git)`
  font-size: 2.5rem;
  color: white;
`;

export const LinkedIn = styled(IN)`
  font-size: 2.5rem;
  color: white;
`;

export const Image = styled.img`
    

  width: 13rem;
  height: 4.5rem;
`;
Image.Wrapper = styled.div`
`;


export const Wrapper = styled.div` 
    display:flex;
    flex-direction:column;
    gap:5rem;
    justify-content:center;
    align-items: center;
`


export const FooterBlur = styled.div`
  width: 30rem;
  height: 18rem;
  left: 18rem;
`;