import styled from "styled-components";
import { FiMenu as ico } from "react-icons/fi";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  /* width: 160px;
  height: 42px; */

  width: 10rem;
  height: 3rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  color: white;

  @media (max-width: 768px) {

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
  }
`;

export const Li = styled.li`
  cursor: pointer;
  :hover {
    cursor: pointer;
    color: var(--orange);
    transform: scale(1.1);
  }

  :active {
    cursor: pointer;
    color: var(--darkOrange);
    transform: scale(1);
  }
`;

export const MenuIcon = styled(ico)`
  color: white;
  font-size: 30px;
  opacity: 1;

  :hover {
    cursor: pointer;
  }

  :active{
    transform:scale(1.1)
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 0;
  top: 1.5rem;

  background-color: var(--appColor);
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  padding-right: ${({ barClosed }) => (barClosed ? "0rem" : "2rem")};
  padding: ${({ barClosed }) => barClosed && "4px"};
  margin-right: ${({ barClosed }) => (barClosed ? "1rem" : "0rem")};
  z-index: 10;
`;

export const HeroBlur = styled.div`
  width: 30rem;
  height: 30rem;
  left: 0;
  @media (max-width: 768px) {
    width: 14rem;
  }
`;
