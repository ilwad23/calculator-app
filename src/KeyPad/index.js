import React from "react";
import { Wrapper, Key } from "./style.js";
import { ThemeProvider } from "styled-components";
import { useStateValue } from "../StateProvider";
const theme1 = {
  mainBg: "hsl(223, 31%, 20%)",
  mainKBg: "#eae3dc",
  mainKBgSw: "0px 4px 4px #b4a597",
  mainKColor: "hsl(221, 14%, 31%)",
  secKBg: "#637097",
  secKBgSw: "0px 4px 4px #444b5a",
  secKColor: "white",
  thirdKBg: "#d03f2f",
  thirdKBgSw: "0px 4px 4px #93261A",
  thirdKColor: "white",
};
const theme2 = {
  mainBg: "hsl(0, 5%, 81%)",
  mainKBg: "hsl(45, 7%, 89%)",
  mainKBgSw: "0px 4px 4px hsl(35, 11%, 61%)",
  mainKColor: "hsl(60, 10%, 19%)",
  secKBg: "hsl(185, 42%, 37%)",
  secKBgSw: "0px 4px 4px hsl(185, 58%, 25%)",
  secKColor: "white",
  thirdKBg: "hsl(25, 98%, 40%)",
  thirdKBgSw: "0px 4px 4px hsl(25, 99%, 27%)",
  thirdKColor: "white",
};
const theme3 = {
  mainBg: "hsl(268, 71%, 12%)",
  mainKBg: "hsl(268, 47%, 21%)",
  mainKBgSw: "0px 4px 4px hsl(290, 70%, 36%)",
  mainKColor: "hsl(52, 100%, 62%)",
  secKBg: "hsl(281, 89%, 26%)",
  secKBgSw: "0px 4px 4px hsl(285, 91%, 52%)",
  secKColor: "white",
  thirdKBg: "hsl(176, 100%, 44%)",
  thirdKBgSw: "0px 4px 4px hsl(177, 92%, 70%)",
  thirdKColor: "hsl(198, 20%, 13%)",
};
function KeyPad() {
  const themes = { 1: theme1, 2: theme2, 3: theme3 };
  const [{ toggle }, dispatch] = useStateValue();
  function addNumber(num) {
    dispatch({ type: "CHANGE_NUMBER", number: num });
  }
  function addOperator(op) {
    dispatch({ type: "PLACE_OPERATOR", operator: op });
  }
  return (
    <ThemeProvider theme={themes[toggle]}>
      <Wrapper>
        <Key onClick={() => addNumber(7)}>7</Key>
        <Key onClick={() => addNumber(8)}>8</Key>
        <Key onClick={() => addNumber(9)}>9</Key>
        <Key onClick={() => dispatch({ type: "DELETE_NUMBER" })} blue>
          DEL
        </Key>
        <Key onClick={() => addNumber(4)}>4</Key>
        <Key onClick={() => addNumber(5)}>5</Key>
        <Key onClick={() => addNumber(6)}>6</Key>
        <Key onClick={() => addOperator("+")}>+</Key>
        <Key onClick={() => addNumber(1)}>1</Key>
        <Key onClick={() => addNumber(2)}>2</Key>
        <Key onClick={() => addNumber(3)}>3</Key>
        <Key onClick={() => addOperator("-")}>-</Key>
        <Key onClick={() => addNumber(".")}>.</Key>
        <Key onClick={() => addNumber(0)}>0</Key>
        <Key onClick={() => addOperator("/")}>/</Key>
        <Key onClick={() => addOperator("x")}>x</Key>
        <Key onClick={() => dispatch({ type: "RESET" })} blue bigB>
          RESET
        </Key>
        <Key onClick={() => dispatch({ type: "EQUAL" })} bigO>
          =
        </Key>
      </Wrapper>
    </ThemeProvider>
  );
}

export default KeyPad;
