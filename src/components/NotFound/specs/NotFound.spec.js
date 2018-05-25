import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotFound from "../NotFound";

describe("NotFound", () => {
  const component = shallow(<NotFound />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
