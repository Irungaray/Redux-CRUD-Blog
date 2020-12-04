import axios from "axios";

import { GET_USERS } from '../types/usersTypes'
import { LOADING } from '../types/usersTypes'
import { ERROR } from '../types/usersTypes'

export const getAll = () => async (dispatch) => {
  let userList;

  dispatch({
    type: LOADING
  })

  try {
      userList = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    });
  } catch (err) {
    console.log('Error:', err.message)
    dispatch({
      type: ERROR,
      payload: err.message
    })
  }

  dispatch({
    type: GET_USERS,
    payload: userList.data,
  });
};
