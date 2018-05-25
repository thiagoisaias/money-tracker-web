import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Spinner from "../Spinner";

describe("Spinner", () => {
  const mockProps = {
    size: 30,
    color: "#FFF"
  };
  const component = shallow(<Spinner {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
