import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.bgColorMain};
  display: grid;
  place-items: center;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  color: #fff;
`;
export const Borad = styled.div`
  width: 541px;
  height: 721px;
  @media screen and (max-width: 500px) {
    width: 80vw;
    min-height: 667px;
  }
`;
