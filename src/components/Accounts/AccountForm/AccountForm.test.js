import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountForm from "./AccountForm";

describe("AccountForm", () => {
  const mockProps = {
    isLoading: false,
    error: null,
    submitData: jest.fn()
  };
  const component = shallow(<AccountForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
