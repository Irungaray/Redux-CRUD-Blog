import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import worksReducer from "./worksReducer";

export default combineReducers({
  usersReducer,
  postsReducer,
  worksReducer
});
