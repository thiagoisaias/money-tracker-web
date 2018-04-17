import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Spinner from "./Spinner";

describe("Spinner", () => {
  const width = 24;
  const height = 24;
  const component = shallow(<Spinner width={width} height={height} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
