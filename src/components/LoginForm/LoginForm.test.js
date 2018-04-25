import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  const mockProps = {
    toggleNewAccount: jest.fn(),
    onLogin: jest.fn(),
    isAuthenticated: true,
    isLoading: false,
    error: null
  };

  const component = shallow(<LoginForm {...mockProps} />);

  fit("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
