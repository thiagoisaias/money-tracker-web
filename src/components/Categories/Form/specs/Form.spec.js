import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../Form";

describe("Category Form", () => {
  const mockProps = {
    id: 1,
    color: "red",
    error: null,
    isLoading: false,
    match: { path: "/path" },
    name: "Lorem",
    onSubmitData: jest.fn()
  };
  const component = shallow(<Form {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
