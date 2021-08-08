import { setLoading } from './logActions';
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading(true);
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
