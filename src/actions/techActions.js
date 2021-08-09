import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from './types';

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getTechs = () => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: GET_TECHS,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
