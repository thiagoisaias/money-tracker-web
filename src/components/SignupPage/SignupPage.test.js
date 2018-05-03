import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SignupPage } from "./SignupPage";

describe("SignupPage", () => {
  const mockProps = {
    isLoading: false
  };
  const component = shallow(<SignupPage {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
