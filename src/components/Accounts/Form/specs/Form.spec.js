import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../Form";

describe("Account Form", () => {
  const mockProps = {
    id: 1,
    name: "Lorem",
    error: null,
    initialBalance: "32423.43",
    isLoading: false,
    match: { path: "/path" },
    onSubmitData: jest.fn()
  };
  const component = shallow(<Form {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
