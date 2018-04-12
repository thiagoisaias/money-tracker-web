import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Home from "./Home";

describe("Home", () => {
  const component = shallow(<Home />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
