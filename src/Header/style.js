import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin-top: 20px;
  color: ${(props) => props.theme.color};
  `;
export const ThemeChanger = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  `;
export const Theme = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 13px;
  line-height: 15px;
  `;
export const Switch = styled.div`
  margin-left: 25px;
  `;
export const Nums = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 72px;
  `;
export const Num = styled.p`
  font-size: 12px;
  line-height: 13px;
  color: ${(props) => props.theme.color};
  `;
export const Toggle = styled.div`
  background: ${(props) => props.theme.toggleBgColor};
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
  width: 72px;
  height: 26px;
`;
export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;
  cursor: pointer;
  background: ${(props) => (props.on && props.theme.circleBgColor)};
`;
