import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Item from "../Item";

describe("Category Item", () => {
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
  const component = shallow(<Item {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
