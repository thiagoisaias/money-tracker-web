import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../../utils/devices";

import AccountItem from "../AccountItem/AccountItem";
import Layout from "../../Layout/Layout";
import withExpandableItem from "../../../hoc/ExpandableItem/ExpandableItem";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 32px 16px;
  }

  @media ${devices.mediumUp} {
    padding: 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media ${devices.mediumUp} {
    margin-left: 16px;
  }
`;

const NewAccountLink = styled(NavLink)`
  display: block;
  width: 125px;
  height: 35px;
  line-height: 35px;
  padding: 0 8px;
  border-radius: 2px;
  background-color: #add8e6;
  color: #fff;
  font-size: 13px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #a9cdd8;
    opacity: 1;
  }
`;

const mockProps = {
  accountList: [
    {
      id: "AC512",
      name: "Mock Account Name",
      initialBalance: 98234.43,
      currentBalance: 304.45
    },
    {
      id: "AC312",
      name: "Mock Account Name 2",
      initialBalance: 8294.76,
      currentBalance: 9973204.45
    }
  ]
};

const AccountList = props => {
  const mockAccountList = mockProps.accountList.map(account => {
    const isActive = props.activeItemId === account.id;
    return (
      <AccountItem
        key={account.id}
        handleActiveItem={props.handleActiveItem}
        isActive={isActive}
        {...account}
      />
    );
  });

  return (
    <Layout>
      <Container>
        <Header>
          <Title> {"Accounts"} </Title>
          <NewAccountLink to="/accounts/new">{"New Account"}</NewAccountLink>
        </Header>
        {mockAccountList}
      </Container>
    </Layout>
  );
};

AccountList.propTypes = {
  accountList: PropTypes.array.isRequired,
  isActive: PropTypes.string.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default withExpandableItem(AccountList);
