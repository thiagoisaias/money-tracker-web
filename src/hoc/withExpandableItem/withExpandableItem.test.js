import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import withExpandableItem from "./withExpandableItem";

describe("withExpandableItem", () => {
  const component = shallow(<withExpandableItem />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
