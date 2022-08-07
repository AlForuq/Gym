import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:flex;
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


export const HeroBlur = styled.div`
  width:30rem;
  height:30rem;
  left:0;
`