import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../../utils/devices";
import { NavLink } from "react-router-dom";

import CategoryItem from "../CategoryItem/CategoryItem";
import Layout from "../../Layout/Layout";
import Spinner from "../../UI/Spinner/Spinner";
import withExpandableItem from "../../../hoc/withExpandableItem/withExpandableItem";

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

const LinkButton = styled(NavLink)`
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
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

const categoryList = [
  { id: 1, name: "Home", color: "lightblue" },
  { id: 2, name: "Food", color: "lightsalmon" },
  { id: 3, name: "Transport", color: "lightgreen" },
  { id: 4, name: "Education", color: "#777" }
];

const CategoryList = props => {
  const { activeItemId, handleActiveItem, error } = props;
  const isLoading = false;
  const list = categoryList.map(category => {
    const isActive = activeItemId === category.id;
    return (
      <CategoryItem
        key={category.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        categoryData={category}
      />
    );
  });

  return (
    <Layout>
      <Container>
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
          {isLoading ? <Spinner size={40} color={"#777"} /> : list}
        </Fragment>
      </Container>
    </Layout>
  );
};

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  activeItemId: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleActiveItem: PropTypes.func.isRequired
};

export default withExpandableItem(CategoryList);
