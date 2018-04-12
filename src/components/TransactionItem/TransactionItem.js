import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #f2f2f2;
  padding: 16px;
  margin: 16px;
  cursor: default;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;

  @media (max-width: 736px) {
    flex-wrap: wrap;
  }
`;

const Description = styled.div``;

const CategoryContainer = styled.div`
  display: flex;
  margin: 8px 0;
`;

const CategoryName = styled.div``;

const CategoryColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 4px 6px;
  background-color: ${props => props.color};
`;

const Value = styled.div`
  color: ${props => (props.transactionType === "earning" ? "green" : "red")};
`;

const DateText = styled.div`
  margin: 8px 0;
`;

const ActionsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Action = styled.span`
  display: block;
  cursor: pointer;
  margin: 0 6px;
  &:hover {
    opacity: 0.9;
  }
`;

const TransactionItem = props => {
  return (
    <Container>
      <ItemInfoContainer>
        <DateText>{props.date}</DateText>
        <Description> {props.description} </Description>
        <CategoryContainer>
          <CategoryName>{props.category.name}</CategoryName>
          <CategoryColor color={props.category.color} />
        </CategoryContainer>
        <Value transactionType={props.transaction_type}>
          {" "}
          R$ {props.value}{" "}
        </Value>
      </ItemInfoContainer>
      <ActionsContainer>
        <Action> Edit </Action>
        <Action onClick={() => props.handleDelete(props.id)}> Delete </Action>
      </ActionsContainer>
    </Container>
  );
};

export default TransactionItem;
