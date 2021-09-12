import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  width: 541px;
  height: 482px;
  margin-top: 30px;
  padding: 30px;
  background: ${(props) => (props.theme.mainBg )};
  border-radius: 10px;
`;
export const Key = styled.div`
  left: 157px;
  top: 297px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 35px;
  line-height: 39px;
  background: ${(props) => props.theme.mainKBg};
  box-shadow: ${(props) => props.theme.mainKBgSw};
  color: ${(props) => props.theme.mainKColor};
  grid-column: ${(props) => props.bigB && "1/3"};
  ${(props) =>
    props.blue &&
    css`
      background: #637097;
      box-shadow: 0px 4px 4px #444b5a;
      background: ${(props) => (props.theme.secKBg)};
      box-shadow: ${(props) =>
        props.theme.secKBgSw};
      color: ${(props) => (props.theme.secKColor)};
    `};
  ${(props) =>
    props.bigO &&
    css`
      grid-column: 3/5;
      color: ${(props) => (props.theme.thirdKColor)};
      background: ${(props) => (props.theme.thirdKBg)};
      box-shadow: ${(props) =>
        props.theme.thirdKBgSw};
    `};
`;
