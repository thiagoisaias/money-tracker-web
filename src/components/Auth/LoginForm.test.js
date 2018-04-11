import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  const component = shallow(<LoginForm />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
