import { GET_WORKS } from "../types/worksTypes";
import { LOADING } from "../types/worksTypes";
import { ERROR } from "../types/worksTypes";
import { CHANGE_USER_ID } from "../types/worksTypes";
import { CHANGE_TITLE } from "../types/worksTypes";
import { SAVED } from "../types/worksTypes";
import { ACTUALIZE } from "../types/worksTypes";
import { CLEAN } from "../types/worksTypes";

const INITIAL_STATE = {
  works: {},
  loading: false,
  error: "",
  userId: "",
  title: "",
  goBack: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WORKS:
      return {
        ...state,
        works: action.payload,
        loading: false,
        error: "",
        goBack: false,
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    case CHANGE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case SAVED:
      return {
        ...state,
        works: {},
        loading: false,
        error: "",
        goBack: true,
        userId: "",
        title: "",
      };

    case ACTUALIZE:
      return {
        ...state,
        works: action.payload,
      };

    case CLEAN:
      return {
        ...state,
        userId: "",
        title: "",
      };

    default:
      return state;
  }
};

export default reducer;
