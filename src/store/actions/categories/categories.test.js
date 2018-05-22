import * as actionTypes from "../actionTypes";
import * as actions from "./categories";

describe("Categories actions", () => {
  const categoryData = {
    id: 1,
    name: "Lorem",
    color: "red"
  };
  const categoryList = [
    { id: 1, name: "Home", color: "red" },
    { id: 2, name: "Food", color: "blue" }
  ];
  const error = "Something went wrong.";

  it("should create createCategoryStart action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_CATEGORY_START
    };
    expect(actions.createCategoryStart()).toEqual(expectedAction);
  });

  it("should create createCategorySuccess action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_CATEGORY_SUCCESS,
      categoryData
    };
    expect(actions.createCategorySuccess(categoryData)).toEqual(expectedAction);
  });

  it("should create createCategoryFail action", () => {
    const expectedAction = {
      type: actionTypes.CREATE_CATEGORY_FAIL,
      error
    };
    expect(actions.createCategoryFail(error)).toEqual(expectedAction);
  });

  xit("should create createCategory (async) action", () => {
    //TODO: Async action
  });

  it("should create fetchCategoriesStart action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_CATEGORIES_START
    };
    expect(actions.fetchCategoriesStart()).toEqual(expectedAction);
  });

  it("should create fetchCategoriesSuccess action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      categoryList
    };
    expect(actions.fetchCategoriesSuccess(categoryList)).toEqual(
      expectedAction
    );
  });

  it("should create fetchCategoriesFail action", () => {
    const expectedAction = {
      type: actionTypes.FETCH_CATEGORIES_FAIL,
      error
    };
    expect(actions.fetchCategoriesFail(error)).toEqual(expectedAction);
  });

  xit("should create fetchCategories (async) action", () => {
    //TODO: Async action
  });

  it("should create updateCategoryStart action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_CATEGORY_START
    };
    expect(actions.updateCategoryStart()).toEqual(expectedAction);
  });

  it("should create updateCategorySuccess action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_CATEGORY_SUCCESS,
      categoryData
    };
    expect(actions.updateCategorySuccess(categoryData)).toEqual(expectedAction);
  });

  it("should create updateCategoryFail action", () => {
    const expectedAction = {
      type: actionTypes.UPDATE_CATEGORY_FAIL,
      error
    };
    expect(actions.updateCategoryFail(error)).toEqual(expectedAction);
  });

  xit("should create updateCategory (async) action", () => {
    //TODO: Async action
  });

  it("should create deleteCategoryStart action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_CATEGORY_START
    };
    expect(actions.deleteCategoryStart()).toEqual(expectedAction);
  });

  it("should create deleteCategorySuccess action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_CATEGORY_SUCCESS,
      categoryId: categoryData.id
    };
    expect(actions.deleteCategorySuccess(categoryData.id)).toEqual(
      expectedAction
    );
  });

  it("should create deleteCategoryFail action", () => {
    const expectedAction = {
      type: actionTypes.DELETE_CATEGORY_FAIL,
      error
    };
    expect(actions.deleteCategoryFail(error)).toEqual(expectedAction);
  });

  xit("should create deleteCategory (async) action", () => {
    //TODO: Async action
  });

  it("should create setCategoryToEdit action", () => {
    const expectedAction = {
      type: actionTypes.SET_CATEGORY_TO_EDIT,
      categoryData
    };
    expect(actions.setCategoryToEdit(categoryData)).toEqual(expectedAction);
  });

  it("should create clearAccountToEdit action", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_CATEGORY_TO_EDIT
    };
    expect(actions.clearCategoryToEdit()).toEqual(expectedAction);
  });
});
