import * as actionTypes from "../actionTypes";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import { displayNotification } from "store/actions/notifications/notifications";

/* Create Category */

export const createCategoryStart = () => ({
  type: actionTypes.CREATE_CATEGORY_START
});

export const createCategorySuccess = categoryData => ({
  type: actionTypes.CREATE_CATEGORY_SUCCESS,
  categoryData
});

export const createCategoryFail = error => ({
  type: actionTypes.CREATE_CATEGORY_FAIL,
  error
});

export const createCategory = (categoryData, history) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(createCategoryStart());

    axios
      .post(
        `/users/${userId}/categories`,
        { category: decamelizeKeys(categoryData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(createCategorySuccess(parsedData));
        history.push("/categories");
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Category created."
          })
        );
      })
      .catch(error => {
        dispatch(createCategoryFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Category not created."
          })
        );
      });
  };
};

/* Fetch Categories */

export const fetchCategoriesStart = () => ({
  type: actionTypes.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = categoryList => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  categoryList
});

export const fetchCategoriesFail = error => ({
  type: actionTypes.FETCH_CATEGORIES_FAIL,
  error
});

export const fetchCategories = () => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(fetchCategoriesStart());

    axios
      .get(`/users/${userId}/categories`, { headers: authHeaders })
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(fetchCategoriesSuccess(parsedData));
      })
      .catch(error => {
        dispatch(fetchCategoriesFail("Something went wrong."));
      });
  };
};

/* Update Categories */

export const updateCategoryStart = () => ({
  type: actionTypes.UPDATE_CATEGORY_START
});

export const updateCategorySuccess = categoryData => ({
  type: actionTypes.UPDATE_CATEGORY_SUCCESS,
  categoryData
});

export const updateCategoryFail = error => ({
  type: actionTypes.UPDATE_CATEGORY_FAIL,
  error
});

export const updateCategory = (formData, categoryId, history) => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(updateCategoryStart());

    axios
      .put(
        `/users/${userId}/categories/${categoryId}`,
        { category: decamelizeKeys(formData) },
        { headers: authHeaders }
      )
      .then(response => {
        const parsedData = camelizeKeys(response.data);
        dispatch(updateCategorySuccess(parsedData));
        history.push("/categories");
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Category updated."
          })
        );
      })
      .catch(error => {
        dispatch(updateCategoryFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Category not updated."
          })
        );
      });
  };
};

/* Delete Categories */

export const deleteCategoryStart = () => ({
  type: actionTypes.DELETE_CATEGORY_START
});

export const deleteCategorySuccess = categoryId => ({
  type: actionTypes.DELETE_CATEGORY_SUCCESS,
  categoryId
});

export const deleteCategoryFail = error => ({
  type: actionTypes.DELETE_CATEGORY_FAIL,
  error
});

export const deleteCategory = categoryId => {
  return (dispatch, getState) => {
    const authHeaders = decamelizeKeys(getState().auth.headers);
    const userId = getState().auth.user.id;

    dispatch(deleteCategoryStart());

    axios
      .delete(`/users/${userId}/categories/${categoryId}`, {
        headers: authHeaders
      })
      .then(response => {
        dispatch(deleteCategorySuccess(categoryId));
        dispatch(
          displayNotification({
            type: "SUCCESS",
            message: "Category deleted."
          })
        );
      })
      .catch(error => {
        dispatch(deleteCategoryFail("Something went wrong."));
        dispatch(
          displayNotification({
            type: "DANGER",
            message: "Category not deleted"
          })
        );
      });
  };
};

/* Other */

export const setCategoryToEdit = categoryData => ({
  type: actionTypes.SET_CATEGORY_TO_EDIT,
  categoryData
});

export const clearCategoryToEdit = () => ({
  type: actionTypes.CLEAR_CATEGORY_TO_EDIT
});

export const clearCategoriesError = () => ({
  type: actionTypes.CLEAR_CATEGORIES_ERROR
});
