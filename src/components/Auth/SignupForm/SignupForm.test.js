import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
  const mockProps = {
    error: null,
    handleInputChange: jest.fn(),
    isLoading: false,
    onSubmitData: jest.fn()
  };

  const component = shallow(<SignupForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
