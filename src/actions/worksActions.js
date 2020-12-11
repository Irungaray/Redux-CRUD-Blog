import axios from "axios";

import { GET_WORKS } from "../types/worksTypes";
import { LOADING } from "../types/worksTypes";
import { ERROR } from "../types/worksTypes";

export const getWorks = () => async (dispatch) => {
  let worksList;

  dispatch({
    type: LOADING,
  });

  try {
    worksList = await axios({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
    });

    const works = {};
    worksList.data.map((work) => (
      works[work.userId] = {
        ...works[work.userId],
        [work.id]: {
          ...work
        }
      }
    ))

    dispatch({
      type: GET_WORKS,
      payload: works,
    });
  } catch (err) {
    console.log("Error en tareas:", err.message);
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
