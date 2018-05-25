import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Category Item Container", () => {
  const mockProps = {
    categoryData: {
      id: 1,
      name: "Lorem",
      color: "#A3H7S3"
    },
    handleActiveItem: jest.fn(),
    history: {},
    isActive: false,
    isLoading: false,
    onDeleteCategory: jest.fn(),
    onSetCategoryToEdit: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
