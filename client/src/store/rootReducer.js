import { combineReducers } from "redux";
import alert from "../reducers/alert";
import auth from "../reducers/auth";
import profile from "../reducers/profile";

const rootReducer = combineReducers({
  alert,
  auth,
  profile,
});

export default rootReducer;
