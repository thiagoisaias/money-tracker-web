import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  categoryToEdit: null,
  categoryList: []
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        categoryList: [...state.categoryList, { ...action.categoryData }]
      };
    case actionTypes.CREATE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        categoryList: [...action.categoryList]
      };
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.UPDATE_CATEGORY_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: state.categoryList.map(item => {
          return item.id === action.categoryData.id
            ? { ...action.categoryData }
            : item;
        }),
        error: null,
        isLoading: false
      };
    case actionTypes.UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.DELETE_CATEGORY_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: state.categoryList.filter(item => {
          return item.id !== action.categoryId;
        }),
        error: null,
        isLoading: false
      };
    case actionTypes.DELETE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case actionTypes.SET_CATEGORY_TO_EDIT:
      return {
        ...state,
        categoryToEdit: { ...action.categoryData }
      };
    case actionTypes.CLEAR_CATEGORY_TO_EDIT:
      return {
        ...state,
        categoryToEdit: null
      };
    default:
      return state;
  }
};

export default categories;
