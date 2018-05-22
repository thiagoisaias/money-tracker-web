import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CategoryList from "./CategoryList";

describe("CategoryList", () => {
  const mockProps = {
    categoryList: [
      { id: 1, name: "Food", color: "lightblue" },
      { id: 2, name: "Home", color: "lightsalmon" }
    ],
    activeItemId: 1,
    handleActiveItem: jest.fn(),
    isLoading: false
  };
  const component = shallow(<CategoryList {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
