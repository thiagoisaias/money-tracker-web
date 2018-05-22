import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  clearCategoryToEdit,
  createCategory,
  updateCategory,
  setCategoryToEdit
} from "../../../store/actions/categories/categories";

import CategoryForm from "../../../components/Categories/CategoryForm/CategoryForm";

export class CategoryFormContainer extends Component {
  submitData = categoryData => {
    const { history, isLoading, onCreateCategory } = this.props;

    if (isLoading) {
      return;
    }
    onCreateCategory(categoryData, history);
  };

  render() {
    const { categoryToEdit, error, isLoading, match } = this.props;
    return (
      <CategoryForm
        {...categoryToEdit}
        error={error}
        isLoading={isLoading}
        match={match}
        submitData={this.submitData}
      />
    );
  }

  componentDidMount() {}
}

CategoryFormContainer.propTypes = {
  categoryToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  error: PropTypes.string,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onClearCategoryToEdit: PropTypes.func.isRequired,
  onCreateCategory: PropTypes.func.isRequired,
  onUpdateCategory: PropTypes.func.isRequired,
  onSetCategoryToEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    categoryToEdit: state.categories.categoryToEdit,
    error: state.categories.error,
    isLoading: state.categories.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearCategoryToEdit: () => {},
    onCreateCategory: (categoryData, history) => {
      dispatch(createCategory(categoryData, history));
    },

    onUpdateCategory: () => {},
    onSetCategoryToEdit: () => {}
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryFormContainer)
);
