import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from './types';

export const getTechs = () => async (dispatch) => {
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

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const addTech = (tech) => async (dispatch) => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'json/application',
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
