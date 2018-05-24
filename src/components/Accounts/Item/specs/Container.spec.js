import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Container } from "../Container";

describe("Account Item Container", () => {
  const mockProps = {
    accountData: {
      id: 1,
      name: "Lorem",
      initialBalance: "23423.00"
    },
    handleActiveItem: jest.fn(),
    history: {},
    isActive: false,
    isLoading: false,
    onDeleteAccount: jest.fn(),
    onSetAccountToEdit: jest.fn()
  };
  const component = shallow(<Container {...mockProps} />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
