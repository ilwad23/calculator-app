export const initialState = {
  toggle: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        toggle: action.toggle,
      };
  }
};
export default reducer;
