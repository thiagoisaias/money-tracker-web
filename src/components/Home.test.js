import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  const component = shallow(<Home />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
