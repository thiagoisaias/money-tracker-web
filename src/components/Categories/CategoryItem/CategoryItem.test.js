import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CategoryItem from "./CategoryItem";

describe("CategoryItem", () => {
  const mockProps = {
    categoryData: {
      id: 1,
      name: "Food",
      color: "lightblue"
    },
    handleActiveItem: jest.fn(),
    handleDelete: jest.fn(),
    handleEdit: jest.fn(),
    isActive: false
  };
  const component = shallow(<CategoryItem {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
