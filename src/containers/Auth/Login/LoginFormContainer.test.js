import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { LoginFormContainer } from "./LoginFormContainer";

describe("LoginFormContainer", () => {
  const mockProps = {
    error: null,
    onClearAuthError: jest.fn(),
    onLogin: jest.fn(),
    isLoading: false,
    history: {}
  };
  const component = shallow(<LoginFormContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
