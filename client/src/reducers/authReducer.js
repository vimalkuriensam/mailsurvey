import { FETCH_USER } from "../actions/types";

const authReducerDefaultState = null;

const authReducer = (state = authReducerDefaultState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
