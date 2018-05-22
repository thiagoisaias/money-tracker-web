import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CategoryForm from "./CategoryForm";

describe("CategoryForm", () => {
  const mockProps = {
    id: 1,
    color: "red",
    error: null,
    isLoading: false,
    match: { path: "/path" },
    name: "Lorem",
    submitData: jest.fn()
  };
  const component = shallow(<CategoryForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
