import axios from "axios";

import { GET_POSTS } from "../types/postsTypes";
import { GET_USER_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/postsTypes";
import { ERROR } from "../types/postsTypes";

import * as usersTypes from '../types/usersTypes';
const { GET_USERS: GET_ALL_USERS } = usersTypes

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
  const { userPosts } = getState().postsReducer;
  const user_id = users[key].id;

  let userPostsList;

  dispatch({
    type: LOADING,
  });

  try {
    userPostsList = await axios({
      url: `http://jsonplaceholder.typicode.com/posts?userId=${user_id}`,
      method: "GET",
    })

    const actualPosts = [
      ...userPosts,
      userPostsList.data,
    ];

    const postsKey = actualPosts.length -- -1;
    const actualUsers = [...users];
    actualUsers[key] = {
      ...users[key],
      postsKey
    }

    dispatch({
      type: GET_ALL_USERS,
      payload: actualUsers,
    });

    dispatch({
      type: GET_USER_POSTS,
      payload: actualPosts,
    });
  } catch (err) {
    console.log("Error in fetch:", err.message);

    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
}