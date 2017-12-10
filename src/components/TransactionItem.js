import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #f2f2f2;
  padding: 6px;
  margin: 16px 0;
`;

const Description = styled.div`
`;


const CategoryContainer = styled.div`
  display: flex;
  margin: 8px 0;
`;

const CategoryName = styled.div`
`;

const CategoryColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: ${props => props.color};
`;

const Value = styled.div`
`;

const DateText = styled.div`
  margin: 8px 0;
`;

const ActionsContainer = styled.div`
  > span {
    cursor: pointer;
  }
`;

const TransactionItem = props => {
  return (
    <Container>
      <Description> {props.description} </Description>
      <CategoryContainer>
        <CategoryName>{props.category.name}</CategoryName>
        <CategoryColor color={props.category.color}/>
      </CategoryContainer>
      <Value> R$ {props.value} </Value>
      <DateText> {props.date} </DateText>
      <ActionsContainer>
        <span> Edit </span>
        <span> Delete </span>
      </ActionsContainer>
    </Container>
  );
};

export default TransactionItem;
