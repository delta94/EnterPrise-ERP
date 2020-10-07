export const initialState = {
  user: null,
  history: [],
  user_details: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: [...state.history, action.item],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        user_details: action.Info,
      };
  }
};

export default reducer;
