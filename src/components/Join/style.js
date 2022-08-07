import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    padding: 2rem;
`

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
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 700;
  font-size: 3.5rem;
  color: white;
  text-transform: uppercase;
`;

Header.Stroke = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Wrapper = styled.form`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:3rem;
  padding: 0 2rem;
  width: fit-content;
  height: 4.5rem;
  background: #808080;

  position: absolute;
  bottom: 0;
`;

export const Input = styled.input`
  /* width:100%; */
  background: inherit;
  font-size:17px;
  color: #c6c7be;
  border: none;
  outline: none;
  ::placeholder {
    color: #c6c7be;
  }
  /* ::marker {
    color: #c6c7be;
  } */
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
`;

export const Sample = styled.div``;
