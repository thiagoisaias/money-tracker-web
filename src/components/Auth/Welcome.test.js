import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Welcome from "./Welcome";

describe("Welcome", () => {
  const component = shallow(<Welcome />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
