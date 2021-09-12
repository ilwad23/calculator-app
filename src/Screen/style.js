import styled from "styled-components";

export const Wrapper = styled.div`
  width: 541px;
  height: 128px;
  margin-top: 15px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 87px;
  }
`;
export const Number = styled.h1`
  margin-right: 30px;
`;
