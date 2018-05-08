import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AccountForm } from "./AccountForm";

describe("AccountForm", () => {
  const mockProps = {
    userId: "UASDH19283",
    isLoading: false,
    error: null,
    onCreateAccount: jest.fn(),
    onClearAccountState: jest.fn()
  };
  const component = shallow(<AccountForm {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
