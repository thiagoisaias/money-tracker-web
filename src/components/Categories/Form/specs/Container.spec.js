import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Category Form Container", () => {
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
    clearCategoriesError: jest.fn(),
    clearCategoryToEdit: jest.fn(),
    createCategory: jest.fn(),
    updateCategory: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
