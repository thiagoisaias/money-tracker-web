import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { transactionType } from "types";

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

const Item = props => {
  const {
    handleActiveItem,
    handleEdit,
    handleDelete,
    isActive,
    transactionData
  } = props;
  
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
      </Row>
    </Wrapper>
  );
};

Item.propTypes = {
  transactionData: transactionType.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Item;
