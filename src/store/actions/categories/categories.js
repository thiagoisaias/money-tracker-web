import * as actionTypes from "../actionTypes";
import axios from "axios";
import { decamelizeKeys } from "humps";

/* Create Category */

export const createCategoryStart = () => {
  return {
    type: actionTypes.CREATE_CATEGORY_START
  };
};

export const createCategorySuccess = categoryData => {
  return {
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
    categoryData
  };
};

export const createCategoryFail = error => {
  return {
    type: actionTypes.CREATE_CATEGORY_FAIL,
    error
  };
};

export const createCategory = () => {
  return (dispatch, getState) => {
    dispatch(createCategoryStart());
  };
};

/* Fetch Categories */

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategoriesSuccess = categoryList => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categoryList
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error
  };
};

export const fetchCategories = () => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);

    dispatch(fetchCategoriesStart());

    axios
      .get("/categories", { headers: authHeaders })
      .then(response => {
        console.log(response.data);
        dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(fetchCategoriesFail("Something went wrong."));
      });
  };
};

/* Update Categories */

export const updateCategoryStart = () => {
  return {
    type: actionTypes.UPDATE_CATEGORY_START
  };
};

export const updateCategorySuccess = categoryData => {
  return {
    type: actionTypes.UPDATE_CATEGORY_SUCCESS,
    categoryData
  };
};

export const updateCategoryFail = error => {
  return {
    type: actionTypes.UPDATE_CATEGORY_FAIL,
    error
  };
};

export const updateCategory = () => {
  return (dispatch, getState) => {
    dispatch(updateCategoryStart());
  };
};

/* Delete Categories */

export const deleteCategoryStart = () => {
  return {
    type: actionTypes.DELETE_CATEGORY_START
  };
};

export const deleteCategorySuccess = categoryId => {
  return {
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
    categoryId
  };
};

export const deleteCategoryFail = error => {
  return {
    type: actionTypes.DELETE_CATEGORY_FAIL,
    error
  };
};

export const deleteCategory = () => {
  return (dispatch, getState) => {
    dispatch(deleteCategoryStart());
  };
};

/* Other */

export const setCategoryToEdit = categoryData => {
  return {
    type: actionTypes.SET_CATEGORY_TO_EDIT,
    categoryData
  };
};

export const clearCategoryToEdit = () => {
  return {
    type: actionTypes.CLEAR_CATEGORY_TO_EDIT
  };
};
