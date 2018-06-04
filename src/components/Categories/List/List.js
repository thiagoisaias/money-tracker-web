import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { categoryType } from "types";

import {
  Wrapper,
  Header,
  Title,
  LinkButton,
  ErrorMessage,
  BlankStateMessage
} from "./styled";

import ItemContainer from "../Item/Container";
import Layout from "components/Layout/Layout";
import Spinner from "shared/Spinner/Spinner";
import withExpandableItem from "hoc/withExpandableItem/withExpandableItem";

const List = props => {
  const {
    activeItemId,
    categoryList,
    error,
    handleActiveItem,
    isLoading
  } = props;

  const list = categoryList.map(category => {
    const isActive = activeItemId === category.id;
    return (
      <ItemContainer
        key={category.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        categoryData={category}
      />
    );
  });

  return (
    <Layout>
      <Wrapper>
        <Fragment>
          <Header>
            <Title> {"Categories"} </Title>
            <LinkButton to="/categories/new">{"Add Category"}</LinkButton>
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
  categoryList: PropTypes.arrayOf(categoryType).isRequired,
  activeItemId: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default withExpandableItem(List);
