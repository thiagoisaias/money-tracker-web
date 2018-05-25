import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import List from "../List";

describe("Category List", () => {
  const mockProps = {
    categoryList: [
      { id: 1, name: "Food", color: "lightblue" },
      { id: 2, name: "Home", color: "lightsalmon" }
    ],
    activeItemId: 1,
    handleActiveItem: jest.fn(),
    isLoading: false
  };
  const component = shallow(<List {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
