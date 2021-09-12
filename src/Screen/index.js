import React from 'react'
import { Wrapper, Number } from "./style.js";
import { ThemeProvider } from "styled-components";
import { useStateValue } from "../StateProvider";
const theme1 = {
  bgColor: "hsl(224, 36%, 15%)",
  color: "white",
};
const theme2 = {
  bgColor: "hsl(0, 0%, 93%)",
  color: "hsl(60, 10%, 19%)",
};
const theme3 = {
  bgColor: "hsl(268, 71%, 12%)",
  color: "hsl(52, 100%, 62%)",
}; 
function Screen() {
    const themes = { 1: theme1, 2: theme2, 3: theme3 };
    const [{ toggle }, _] = useStateValue(); 
  return (
      <ThemeProvider theme={themes[toggle]}>
        <Wrapper>
          <Number>399,981</Number>  
        </Wrapper>
      </ThemeProvider>
    )
}

export default Screen
