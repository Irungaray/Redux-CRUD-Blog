import axios from "axios";

export const getAll = () => async (dispatch) => {
  let userList = await axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  });

  dispatch({
    type: "GET_USERS",
    payload: userList.data,
  });
};
