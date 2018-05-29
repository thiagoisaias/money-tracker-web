import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

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
  return (
    <Wrapper
      onClick={() => {
        props.handleActiveItem(props.id);
      }}
      isActive={props.isActive}
    >
      <ItemInfoWrapper>
        <TypeIndicator type={props.transactionType} />
        <DateText>{format(new Date(props.date), "DD")}</DateText>
        <Description> {props.description} </Description>
        <CategoryWrapper>
          <CategoryColor color={props.category.color} />
          <CategoryName>{props.category.name}</CategoryName>
        </CategoryWrapper>
        <Value transactionType={props.transactionType}>
          {`${props.value.toLocaleString()}`}
        </Value>
      </ItemInfoWrapper>
      <Row>
        <Account>{props.account.name}</Account>
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
              actionClick("Delete");
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
  transactionType: PropTypes.string.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default Item;
