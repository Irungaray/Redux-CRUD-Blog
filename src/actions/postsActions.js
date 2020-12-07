import axios from "axios";

import { GET_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/postsTypes";
import { ERROR } from "../types/postsTypes";

export const getAll = () => async (dispatch) => {
  let postsLists;

  dispatch({
    type: LOADING,
  });

  try {
    postsLists = await axios({
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET",
    });

    dispatch({
      type: GET_POSTS,
      payload: postsLists.data,
    });
  } catch (err) {
    console.log("Error:", err.message);

    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
