import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SignupFormContainer } from "./SignupFormContainer";

describe("SignupFormContainer", () => {
  const mockProps = {
    error: null,
    onClearAuthError: jest.fn(),
    onSignup: jest.fn(),
    isLoading: false,
    history: {}
  };
  const component = shallow(<SignupFormContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
