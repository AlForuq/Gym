import styled from "styled-components";

export const ProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  font-weight: 500;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  font-style: italic;

  @media (max-width: 768px) {
    margin-top: 3rem;
    flex-direction:column;
    gap:1rem;
    font-size:x-large;
    align-items:center;
  }
`;

Header.Stroke = styled.div`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px){
    flex-direction:column;
  }
`;

export const ProgramDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 1rem; */

  color: white;
  font-family: sans-serif;
  padding: 32px;
  background-color: #808080;
  box-sizing: border-box;
  width: fit-content;
  max-height: fit-content;

  transition: 0.2s;
  :hover {
    cursor: pointer;
    background-color: var(--orange);
    transform: scale(1.05);
  }

  :active {
    cursor: pointer;
    background-color: var(--darkOrange);
    transform: scale(1);
  }

  @media (max-width: 768px){
    gap:1rem;
  }
`;

export const SvgIcon = styled.span`
  fill: white;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Info = styled.div`
  line-height: 32px;
`;

export const JoinNow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

JoinNow.Index = styled.img`
  width: 28px;
  height: 28px;
`;
JoinNow.Text = styled.div`
  font-size: 19px;
`;
