const AppReducer = (state, action) => {

  switch (action.type) {

    // 
    case "EDIT_TEST":
      return {
        ...state,
        test: action.payload
      };

    default:
      return state;
  }
};
export default AppReducer