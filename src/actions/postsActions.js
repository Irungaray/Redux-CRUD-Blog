import axios from "axios";

import { GET_POSTS } from "../types/postsTypes";
import { GET_USER_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/postsTypes";
import { ERROR } from "../types/postsTypes";

// GET ALL POSTS

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

// GET EACH USER'S POSTS

export const getByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const user_id = users[key].id;

  let userPosts;

  dispatch({
    type: LOADING,
  });

  try {
    userPosts = await axios({
      url: `http://jsonplaceholder.typicode.com/posts?userId=${user_id}`,
      method: "GET",
    })

    dispatch({
      type: GET_USER_POSTS,
      payload: userPosts.data,
    });
  } catch (err) {
    console.log("Error:", err.message);

    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
}