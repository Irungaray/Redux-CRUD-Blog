import { bindActionCreators } from "redux";

import { GET_USERS } from '../types/usersTypes'

const INITIAL_STATE = {
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default reducer;
