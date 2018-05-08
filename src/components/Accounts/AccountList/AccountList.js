import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";

import AccountItem from "../AccountItem/AccountItem";
import Layout from "../../Layout/Layout";
import Spinner from "../../Spinner/Spinner";
import withExpandableItem from "../../../hoc/ExpandableItem/ExpandableItem";

import { fetchAccounts } from "../../../store/actions/accounts/accounts";

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

export class AccountList extends Component {
  componentDidMount() {
    const {
      accessToken,
      client,
      expiry,
      tokenType,
      uid,
      userId,
      onFetchAccountList
    } = this.props;

    const authHeaders = { accessToken, client, expiry, tokenType, uid };

    onFetchAccountList(userId, authHeaders);
  }

  render() {
    const {
      accountList,
      activeItemId,
      handleActiveItem,
      error,
      isLoading
    } = this.props;

    const list = accountList.map(account => {
      const isActive = activeItemId === account.id;
      return (
        <AccountItem
          key={account.id}
          handleActiveItem={handleActiveItem}
          isActive={isActive}
          {...account}
        />
      );
    });

    return (
      <Layout>
        <Container>
          {isLoading ? (
            <Spinner height={72} width={72} />
          ) : (
            <Fragment>
              <Header>
                <Title> {"Accounts"} </Title>
                <NewAccountLink to="/accounts/new">
                  {"New Account"}
                </NewAccountLink>
              </Header>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {list.length === 0 && !error ? (
                <BlankStateMessage>
                  &#9888;{"There are no accounts registered yet."}
                </BlankStateMessage>
              ) : (
                list
              )}
            </Fragment>
          )}
        </Container>
      </Layout>
    );
  }
}

AccountList.propTypes = {
  accountList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      initial_balance: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  userId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchAccountList: PropTypes.func.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  activeItemId: PropTypes.number
};

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    client: state.auth.client,
    expiry: state.auth.expiry,
    uid: state.auth.uid,
    userId: state.auth.userId,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error,
    accountList: state.accounts.accountList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAccountList: (userId, authHeaders) => {
      dispatch(fetchAccounts(userId, authHeaders));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withExpandableItem(AccountList)
);
