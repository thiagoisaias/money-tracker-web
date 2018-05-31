import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Name, Balance, ActionsWrapper, Action } from "./styled";

const AccountItem = props => {
  const {
    accountData,
    handleActiveItem,
    handleDelete,
    handleEdit,
    isActive
  } = props;

  return (
    <Wrapper
      isActive={isActive}
      onClick={() => handleActiveItem(accountData.id)}
    >
      <Name>{accountData.name}</Name>
      <Balance>{`$ ${accountData.currentBalance.toLocaleString()}`}</Balance>
      <ActionsWrapper>
        <Action
          onClick={() => {
            handleEdit();
          }}
        >
          {"Edit"}
        </Action>
        <Action
          onClick={() => {
            handleDelete();
          }}
        >
          {"Delete"}
        </Action>
      </ActionsWrapper>
    </Wrapper>
  );
};

AccountItem.propTypes = {
  accountData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    initialBalance: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default AccountItem;
