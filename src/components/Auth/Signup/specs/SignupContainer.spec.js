import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SignupContainer } from "../SignupContainer";

describe("Signup FormContainer", () => {
  const mockProps = {
    error: null,
    onClearAuthError: jest.fn(),
    onSignup: jest.fn(),
    isLoading: false,
    history: {}
  };
  const component = shallow(<SignupContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
