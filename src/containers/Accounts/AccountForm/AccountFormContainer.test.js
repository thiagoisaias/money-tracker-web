import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AccountFormContainer } from "./AccountFormContainer";

describe("AccountFormContainer", () => {
  const mockProps = {
    userId: 1,
    error: null,
    isLoading: false,
    onCreateAccount: jest.fn()
  };
  const component = shallow(<AccountFormContainer {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
