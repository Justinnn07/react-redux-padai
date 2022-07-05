// initialState
const initialState = {
  name: "Nitesh",
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default reducer;
