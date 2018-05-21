import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";

import AccountItemContainer from "../../../containers/Accounts/AccountItem/AccountItemContainer";
import Layout from "../../Layout/Layout";
import Spinner from "../../UI/Spinner/Spinner";
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
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

const ErrorMessage = styled.p`
  color: #e75252;
  font-size: 14px;
  margin-top: 16px;
`;

const BlankStateMessage = styled.p`
  display: block;
  color: #999;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 32px;
  margin-left: 16px;
`;

const AccountList = props => {
  const {
    accountList,
    activeItemId,
    handleActiveItem,
    error,
    isLoading
  } = props;

  const list = accountList.map(account => {
    const isActive = activeItemId === account.id;
    return (
      <AccountItemContainer
        key={account.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        accountData={account}
      />
    );
  });

  return (
    <Layout>
      <Container>
        <Fragment>
          <Header>
            <Title> {"Accounts"} </Title>
            <NewAccountLink to="/accounts/new">{"New Account"}</NewAccountLink>
          </Header>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {list.length === 0 &&
            !error &&
            !isLoading && (
              <BlankStateMessage>
                &#9888;{"There are no accounts registered yet."}
              </BlankStateMessage>
            )}
          {isLoading ? <Spinner size={40} color={"#777"} /> : list}
        </Fragment>
      </Container>
    </Layout>
  );
};

AccountList.propTypes = {
  accountList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      initialBalance: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  activeItemId: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default withExpandableItem(AccountList);
