import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  Wrapper,
  ItemInfoWrapper,
  TypeIndicator,
  DateText,
  Description,
  CategoryWrapper,
  CategoryColor,
  CategoryName,
  Value,
  Row,
  Account,
  ActionsWrapper,
  Action
} from "./styled";

const actionClick = action => {
  console.log(`Clicked ${action}`);
};

const Item = props => {
  const { handleActiveItem, handleDelete, isActive, transactionData } = props;
  return (
    <Wrapper
      onClick={() => {
        handleActiveItem(transactionData.id);
      }}
      isActive={isActive}
    >
      <ItemInfoWrapper>
        <TypeIndicator type={transactionData.transactionType} />
        <DateText>
          {moment(transactionData.date, "YYY-MM-DD").format("DD")}
        </DateText>
        <Description> {transactionData.description} </Description>
        <CategoryWrapper>
          <CategoryColor color={transactionData.category.color} />
          <CategoryName>{transactionData.category.name}</CategoryName>
        </CategoryWrapper>
        <Value transactionType={transactionData.transactionType}>
          {`${transactionData.value.toLocaleString()}`}
        </Value>
      </ItemInfoWrapper>
      <Row>
        <Account>{transactionData.account.name}</Account>
        <ActionsWrapper>
          <Action
            onClick={() => {
              actionClick("Edit");
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
      </Row>
    </Wrapper>
  );
};

Item.propTypes = {
  transactionData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.number.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Item;
