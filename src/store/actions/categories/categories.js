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
        dispatch(createCategorySuccess(response.data));
        history.push("/categories");
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(createCategoryFail("Something went wrong."));
      });
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
    const userId = getState().auth.user.id;

    dispatch(fetchCategoriesStart());

    axios
      .get(`/users/${userId}/categories`, { headers: authHeaders })
      .then(response => {
        dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch(error => {
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
        dispatch(updateCategorySuccess(response.data));
        history.push("/categories");
      })
      .catch(error => {
        dispatch(updateCategoryFail("Something went wrong."));
      });
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
        console.log("delete 200 ok");
        dispatch(deleteCategorySuccess(categoryId));
      })
      .catch(error => {
        console.log(error.response.data);
        dispatch(deleteCategoryFail("Something went wrong."));
      });
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
