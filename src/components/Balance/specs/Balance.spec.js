import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Balance from "../Balance";

describe("Balance", () => {
  const mockProps = {
    isLoading: false,
    overallBalance: "9000"
  };

  const component = shallow(<Balance {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
