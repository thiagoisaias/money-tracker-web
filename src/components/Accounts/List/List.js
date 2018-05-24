import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Header,
  Title,
  LinkButton,
  ErrorMessage,
  BlankStateMessage
} from "./styled";

import ItemContainer from "../Item/ItemContainer";
import Layout from "components/Layout/Layout";
import Spinner from "components/UI/Spinner/Spinner";
import withExpandableItem from "hoc/withExpandableItem/withExpandableItem";

const List = props => {
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
      <ItemContainer
        key={account.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        accountData={account}
      />
    );
  });

  return (
    <Layout>
      <Wrapper>
        <Fragment>
          <Header>
            <Title> {"Accounts"} </Title>
            <LinkButton to="/accounts/new">{"Add Account"}</LinkButton>
          </Header>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {list.length === 0 &&
            !error &&
            !isLoading && (
              <BlankStateMessage>
                &#9888;{"There are no accounts registered yet."}
              </BlankStateMessage>
            )}
          {isLoading ? <Spinner size={25} color={"#777"} /> : list}
        </Fragment>
      </Wrapper>
    </Layout>
  );
};

List.propTypes = {
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

export default withExpandableItem(List);
