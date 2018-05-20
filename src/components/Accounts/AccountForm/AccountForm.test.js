import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountForm from "./AccountForm";

describe("AccountForm", () => {
  const mockProps = {
    id: 1,
    name: "Lorem",
    error: null,
    initialBalance: "32423.43",
    isLoading: false,
    match: { path: "/path" },
    submitData: jest.fn()
  };
  const component = shallow(<AccountForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
