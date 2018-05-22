import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { CategoryFormContainer } from "./CategoryFormContainer";

describe("CategoryFormContainer", () => {
  const mockProps = {
    categoryToEdit: {
      id: 1,
      name: "Lorem",
      color: "red"
    },
    error: null,
    history: {},
    isLoading: false,
    match: {},
    onClearCategoryToEdit: jest.fn(),
    onCreateCategory: jest.fn(),
    onUpdateCategory: jest.fn(),
    onSetCategoryToEdit: jest.fn()
  };
  const component = shallow(<CategoryFormContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
