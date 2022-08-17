import styled from "styled-components";

export const ReasonsContainer = styled.div`
  display: flex;
  padding: 2rem 2rem 0rem 2rem;
  grid-template: 2rem;

  @media (max-width: 768px){
    flex-direction:column;
    gap:3rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-auto-rows: auto;

    > :nth-child(1) {
      width: 7rem;
      height: 17rem;
    }

    > :nth-child(2) {
      width: 8rem;
      height: 10rem;
    }

    > :nth-child(3) {
      width: 8rem;
      height: 6rem;
    }

    > :nth-child(4) {
      display:none;
    }
  }
`;

Left.Img1 = styled.img`
  object-fit: cover;
  grid-row: 1/3;

  width: 12rem;
  height: 28rem;
`;

Left.Img2 = styled.img`
  object-fit: cover;
  grid-column: 2/4;

  width: auto;
  height: 16rem;
`;

Left.Img3 = styled.img`
  object-fit: cover;
  grid-column: 2/3;
  grid-row: 2;

  width: 14rem;
`;

Left.Img4 = styled.img`
  object-fit: cover;
  grid-column: 3/4;
  grid-row: 2;

  width:10rem;
`;

export const Right = styled.div`
  flex: 1;
  font-family: sans-serif;
  font-weight: 700;

  display:flex;
  flex-direction: column;
  gap:2rem;
`;

export const Intro = styled.div`
  color: var(--darkOrange);
`;

export const QuestionTitle = styled.div`
  font-size: 3rem;
  color:white;

`;

export const Span = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const Options = styled.div`
  
`;

Options.Container = styled.div`
  display:flex;
  flex-direction:column;
  gap: 1rem;
`

Options.Wrapper = styled.div` 
  display: flex;
  align-items:center;
  gap: 1rem;
  color:white;
`
Options.Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const PartnerLogo = styled.div`
  display: flex;
  fill: var(--gray);
  gap: 1rem;
`;
export const PartnerText = styled.div`
  font-size: 16px;
  /* font-weight:500;
  font-family:sans-serif; */
  color: var(--gray);
`;

export const PartnerWrapper = styled.div` 
  display: flex;
  flex-direction:column;
  gap: 1rem;
`