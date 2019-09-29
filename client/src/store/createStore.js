import reducers from '../reducers'
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
  return store;
};
