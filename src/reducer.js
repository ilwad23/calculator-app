export const initialState = {
  toggle: 1,
  previousNumber: "0",
  number: "0",
  operator: "",
  answer: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        toggle: action.toggle,
      };
    case "CHANGE_NUMBER":
      let num;
      if (state.answer) {
        num = action.number;
      } else {
        num = state.number + action.number;
      }
      return {
        ...state,
        number: num,
      };
    case "DELETE_NUMBER":
      return {
        ...state,
        number: "0",
      };
    case "PLACE_OPERATOR":
      return {
        ...state,
        previousNumber: state.number,
        number: "",
        operator: action.operator,
      };
    case "RESET":
      return {
        ...state,
        previousNumber: "0",
        number: "0",
        operator: "",
      };
    case "EQUAL":
      let ans;
      switch (state.operator) {
        case "+":
          ans = parseFloat(state.previousNumber) + parseFloat(state.number);
          break;
        case "-":
          ans = parseFloat(state.previousNumber) - parseFloat(state.number);
          break;
        case "/":
          ans = parseFloat(state.previousNumber) / parseFloat(state.number);
          break;
        case "x":
          ans = parseFloat(state.previousNumber) * parseFloat(state.number);
          break;
      }
      return {
        ...state,
        number: ans,
        answer: true,
      };
  }
};
export default reducer;
