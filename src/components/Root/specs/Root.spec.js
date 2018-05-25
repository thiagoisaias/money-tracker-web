import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Root from "../Root";
import configureStore from "configureStore";

describe("Root", () => {
  const mockProps = {
    store: configureStore()
  };
  const component = shallow(<Root {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
