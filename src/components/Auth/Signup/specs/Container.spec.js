import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("SignUp Form Container", () => {
  const mockProps = {
    error: null,
    clearAuthError: jest.fn(),
    signUp: jest.fn(),
    isLoading: false,
    history: {}
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
