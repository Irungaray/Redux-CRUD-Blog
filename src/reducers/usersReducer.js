import { GET_USERS } from '../types/usersTypes'
import { LOADING } from '../types/usersTypes'
import { ERROR } from '../types/usersTypes'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false }

    default:
      return state;
  }
};

export default reducer;
