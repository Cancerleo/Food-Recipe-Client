import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  // showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";

export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipes = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/recipes`);

      // console.log(response.data);
      dispatch(fetchRecipesSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
