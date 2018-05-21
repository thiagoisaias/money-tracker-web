import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  const mockProps = {
    error: null,
    handleInputChange: jest.fn(),
    isLoading: false,
    submitData: jest.fn()
  };

  const component = shallow(<LoginForm {...mockProps} />);

  fit("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
