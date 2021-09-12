import React from "react";
import { Wrapper, Borad } from "./style.js";
import Header from "./Header";
import Screen from "./Screen";
import KeyPad from "./KeyPad";
import { useStateValue } from "./StateProvider";
function App() {
  const mainBg = {
    1: "hsl(222, 26%, 31%)",
    2: "hsl(0, 0%, 90%)",
    3: "hsl(268, 75%, 9%)",
  };
  const [{ toggle }, _] = useStateValue();
  return (
    <Wrapper bgColorMain={mainBg[toggle]}>
      <Borad>
        <Header></Header>
        <Screen></Screen>
        <KeyPad></KeyPad>
      </Borad>
    </Wrapper>
  );
}

export default App;
