import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction:column ;
    gap:2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  position: relative;
  



  > hr {
    width: 11rem;
    border: 2px solid orange;
    border-radius: 20%;

    position: absolute;
    margin-top: -10px;

  }
`;

export const Right = styled.div`
    flex:1;
    position: relative;
    display:flex;
    justify-content:center;
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 700;
  font-size: 3.5rem;
  color: white;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

Header.Stroke = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  width: fit-content;
  height: 4.5rem;
  background: #808080;

  position: absolute;
  bottom: 0;

  @media (max-width: 768px){
    position:relative;
    width:fit-content;
    padding: 0 14px
  }
`;

export const Input = styled.input`
  /* width:100%; */
  background: inherit;
  font-size: 17px;
  color: #c6c7be;
  border: none;
  outline: none;
  ::placeholder {
    color: #c6c7be;
  }
  /* ::marker {
    color: #c6c7be;
  } */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;



export const BtnJoin = styled.button`
  width: 84px;
  height: 40px;
  background-color: #f48915;
  color: White;
  border: none;
  font-family: sans-serif;
  font-weight: bolder;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    width: 74px;
    height: 35px;
  }
`;

export const Sample = styled.div``;
