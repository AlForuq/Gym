import styled from "styled-components";
import { BsInstagram as Insta } from "react-icons/bs";
import { BsGithub as Git } from "react-icons/bs";
import { BsLinkedin as IN } from "react-icons/bs";

export const Container = styled.div`
  padding: 6rem 2rem;
  border-top: 2px solid white;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: fit-content;
`;

export const Instagram = styled(Insta)`
  font-size: 2.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Github = styled(Git)`
  font-size: 2.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LinkedIn = styled(IN)`
  font-size: 2.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img`
  width: 13rem;
  height: 4.5rem;

  @media (max-width: 768px) {
    width: 11rem;
    height: 4rem;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 3.5rem;
  }
`;
Image.Wrapper = styled.div`
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;


export const FooterBlur = styled.div`
  width: 30rem;
  height: 18rem;
  left: 18rem;
  filter: blur(80px);

  @media (max-width: 768px) {
    width: 14rem;
    height: 10rem;
    left: 2rem;
  }
`;