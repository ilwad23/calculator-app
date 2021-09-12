import React, { useState } from "react";
import {
  Wrapper,
  Title,
  ThemeChanger,
  Theme,
  Switch,
  Nums,
  Num,
  Toggle,
  Circle,
} from "./style.js";
import { ThemeProvider } from "styled-components";
import { useStateValue } from "../StateProvider";
const theme1 = {
  color: "white",
  toggleBgColor: "#232c43",
  circleBgColor: "#d03f2f",
};
const theme2 = {
  color: "hsl(60, 10%, 19%)",
  toggleBgColor: "hsl(0, 5%, 81%)",
  circleBgColor: "hsl(25, 98%, 40%)",
};
const theme3 = {
  color: "hsl(52, 100%, 62%)",
  toggleBgColor: "hsl(268, 71%, 12%)",
  circleBgColor: "hsl(176, 100%, 44%)",
};
function Header() {
  const themes = { 1: theme1, 2: theme2, 3: theme3 };
   const [{toggle}, dispatch] = useStateValue();
          
  return (
    <ThemeProvider theme={themes[toggle]}>
      <Wrapper>
        <Title>calc</Title>
        <ThemeChanger>
          <Theme>THEME</Theme>
          <Switch>
            <Nums>
              <Num>1</Num>
              <Num>2</Num>
              <Num>3</Num>
            </Nums>
            <Toggle>
              <Circle
                on={toggle == 1}
                onMouseUp={() =>
                  dispatch({
                    type: "CHANGE_THEME",
                    toggle: 1,
                  })
                }
              ></Circle>
              <Circle
                on={toggle == 2}
                onMouseUp={() =>
                  dispatch({
                    type: "CHANGE_THEME",
                    toggle: 2,
                  })
                }
              ></Circle>
              <Circle
                on={toggle == 3}
                onMouseUp={() =>
                  dispatch({
                    type: "CHANGE_THEME",
                    toggle: 3,
                  })
                }
              ></Circle>
            </Toggle>
          </Switch>
        </ThemeChanger>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Header;
