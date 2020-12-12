import axios from "axios";

import { GET_WORKS } from "../types/worksTypes";
import { LOADING } from "../types/worksTypes";
import { ERROR } from "../types/worksTypes";
import { CHANGE_USER_ID } from "../types/worksTypes";
import { CHANGE_TITLE } from "../types/worksTypes";
import { SAVED } from "../types/worksTypes";
import { ACTUALIZE } from "../types/worksTypes";
import { CLEAN } from "../types/worksTypes";

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
    worksList.data.map(
      (work) =>
        (works[work.userId] = {
          ...works[work.userId],
          [work.id]: {
            ...work,
          },
        })
    );

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

export const changeUserId = (userId) => (dispatch) => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: userId
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

export const add = (newWork) => async (dispatch) => {
  dispatch({
    type: LOADING,
  })

  try {
    const savedWorks = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      newWork
    )

    console.log(savedWorks.data);
    console.log("When searching for a job, edit this log");

    dispatch({
      type: SAVED
    })
  } catch(err) {
    console.log(err.message);

    dispatch({
      type: ERROR,
      payload: "Error de la gran reputa"
    })
  }
}

export const edit = (editedWork) => async (dispatch) => {
  dispatch({
    type: LOADING,
  })

  try {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editedWork.id}`,
      editedWork
    )

      console.log(editedWork)
    console.log("When searching for a job, edit this log");

    dispatch({
      type: SAVED
    })
  } catch(err) {
    console.log(err.message);

    dispatch({
      type: ERROR,
      payload: "Error de la gran reputa"
    })
  }
}

export const changeCheck = (userId, workId) => (dispatch, getState) => {
  const { works } = getState().worksReducer;
  const selected = works[userId][workId];
  const actualized = {
    ...works
  };
  actualized[userId] = {
    ...works[userId]
  };
  actualized[userId][workId] = {
    ...works[userId][workId],
    completed: !selected.completed
  };

  dispatch({
    type: ACTUALIZE,
    payload: actualized
  })
};

export const deleteWork = (workId) => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const workToDelete = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${workId}`
    )

    console.log(workToDelete);

    dispatch({
      type: GET_WORKS,
      payload: {}
    })
  } catch(err) {
    console.log(err.message);

    dispatch({
      type: ERROR,
      payload: "Error de la gran reputa"
    })
  }
}

export const cleanForm = () => (dispatch) => {
  dispatch({
    type: CLEAN
  })
}