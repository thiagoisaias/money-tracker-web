import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteCategory } from "../../../store/actions/categories/categories";

import CategoryItem from "../../../components/Categories/CategoryItem/CategoryItem";

export class CategoryItemContainer extends Component {
  handleDelete = () => {
    const { categoryData, isLoading, onDeleteCategory } = this.props;
    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }
    onDeleteCategory(categoryData.id);
  };

  render() {
    const { categoryData, handleActiveItem, isActive } = this.props;
    return (
      <CategoryItem
        categoryData={categoryData}
        handleDelete={this.handleDelete}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
      />
    );
  }
}

CategoryItemContainer.propTypes = {
  categoryData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.categories.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteCategory: categoryId => {
      dispatch(deleteCategory(categoryId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CategoryItemContainer
);
