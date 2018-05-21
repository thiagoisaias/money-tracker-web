import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";

const Container = styled.div`
  margin: 16px 0;
  padding: 6px 0;
  border-radius: 2px;
  height: ${props => (props.isActive ? "56px" : "36px")};
  transition: ease 0.25s;
  overflow: hidden;

  &:hover {
    border-color: #ddd;
    cursor: pointer;
  }

  @media ${devices.small} {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }

  @media ${devices.mediumUp} {
    border: 1px solid #f2f2f2;
    padding-left: 16px;
  }
`;

const Name = styled.div`
  margin-bottom: 8px;
`;

const Balance = styled.div`
  color: #67b8ff;
  font-weight: 600;
`;

const ActionsContainer = styled.div`
  display: flex;
  color: #777;
  font-size: 12px;
  margin-top: 8px;
`;

const Action = styled.div`
  margin-right: 16px;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const AccountItem = props => {
  const {
    accountData,
    handleActiveItem,
    handleDelete,
    handleEdit,
    isActive
  } = props;

  return (
    <Container
      isActive={isActive}
      onClick={() => handleActiveItem(accountData.id)}
    >
      <Name>{accountData.name}</Name>
      <Balance>{`$ ${accountData.initialBalance.toLocaleString()}`}</Balance>
      <ActionsContainer>
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
      </ActionsContainer>
    </Container>
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
