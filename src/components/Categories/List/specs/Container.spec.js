import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Category List Container", () => {
  const mockProps = {
    categoryList: [
      { id: 1, name: "Home", color: "red" },
      { id: 2, name: "Food", color: "blue" }
    ],
    error: null,
    isLoading: false,
    onFetchCategoryList: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
