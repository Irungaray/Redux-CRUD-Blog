import { GET_POSTS } from "../types/postsTypes";
import { GET_USER_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/postsTypes";
import { ERROR } from "../types/postsTypes";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: ''
      };

    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
        error: ''
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
