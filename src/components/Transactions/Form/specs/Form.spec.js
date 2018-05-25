import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "../Form";

describe("Transaction Form", () => {
  const mockProps = {
    checkFormValidity: jest.fn(),
    error: null,
    generateFormData: jest.fn(),
    handleInputChange: jest.fn(),
    isLoading: false,
    match: {},
    onSubmitData: jest.fn()
  };
  const component = shallow(<Form {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
