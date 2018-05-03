import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AccountList from "./AccountList";

describe("AccountList", () => {
  const component = shallow(<AccountList />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
