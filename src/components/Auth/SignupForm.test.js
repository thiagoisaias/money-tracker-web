import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  const component = shallow(<SignupForm />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
