import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Balance from "./Balance";

describe("Balance", () => {
  const component = shallow(<Balance />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });
});
