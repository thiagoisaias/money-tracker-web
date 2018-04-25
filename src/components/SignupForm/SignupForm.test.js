import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
  const mockProps = {
    toggleNewAccount: jest.fn(),
    onSignup: jest.fn(),
    isAuthenticated: true,
    isLoading: false,
    error: null
  };

  const component = shallow(<SignupForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
