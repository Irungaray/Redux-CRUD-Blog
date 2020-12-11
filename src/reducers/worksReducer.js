import { GET_WORKS } from "../types/worksTypes";
import { LOADING } from "../types/worksTypes";
import { ERROR } from "../types/worksTypes";

const INITIAL_STATE = {
  works: {},
  loading: false,
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WORKS:
      return {
        ...state,
        works: action.payload,
        loading: false,
        error: "",
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
