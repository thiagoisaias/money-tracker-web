import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  clearCategoryToEdit,
  createCategory,
  updateCategory
} from "store/actions/categories/categories";

import Form from "./Form";

export class Container extends Component {
  onSubmitData = formData => {
    const {
      categoryToEdit,
      history,
      isLoading,
      match,
      onCreateCategory,
      onUpdateCategory
    } = this.props;

    if (isLoading) {
      return;
    }

    if (match.path === "/categories/new") {
      onCreateCategory(formData, history);
    } else if (match.path === "/categories/:id/edit" && categoryToEdit) {
      onUpdateCategory(formData, categoryToEdit.id, history);
    } else {
      return;
    }
  };

  render() {
    const { categoryToEdit, error, isLoading, match } = this.props;
    return (
      <Form
        {...categoryToEdit}
        error={error}
        isLoading={isLoading}
        match={match}
        onSubmitData={this.onSubmitData}
      />
    );
  }

  /* When the page is reloaded and the path is /category/:id/edit, categoryToEdit is null, so the
  app redirects the user back to /categories
  */
  componentDidMount() {
    const { categoryToEdit, history, match } = this.props;
    if (match.path === "/categories/:id/edit" && categoryToEdit === null) {
      history.push("/categories");
    }
  }

  // The value of categoryToEdit should be null when the user leave /categories/:id/edit
  componentWillUnmount() {
    const { match, onClearCategoryToEdit } = this.props;

    if (match.path === "/categories/:id/edit") {
      onClearCategoryToEdit();
    }
  }
}

Container.propTypes = {
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
  onUpdateCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categoryToEdit: state.categories.categoryToEdit,
  error: state.categories.error,
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = dispatch => ({
  onClearCategoryToEdit: () => {
    dispatch(clearCategoryToEdit());
  },

  onCreateCategory: (categoryData, history) => {
    dispatch(createCategory(categoryData, history));
  },

  onUpdateCategory: (categoryData, categoryId, history) => {
    dispatch(updateCategory(categoryData, categoryId, history));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
