import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { accountType } from "types";

import Item from "./Item";

import {
  deleteAccount,
  setAccountToEdit
} from "store/actions/accounts/accounts";

export class Container extends Component {
  static propTypes = {
    accountData: accountType.isRequired,
    handleActiveItem: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    setAccountToEdit: PropTypes.func.isRequired
  };

  handleEdit = () => {
    const { accountData, history, setAccountToEdit } = this.props;
    setAccountToEdit(accountData);
    history.push(`/accounts/${accountData.id}/edit`);
  };

  handleDelete = () => {
    const { accountData, isLoading, deleteAccount } = this.props;
    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this account?")) {
      return;
    }
    deleteAccount(accountData.id);
  };

  render() {
    const { accountData, handleActiveItem, isActive } = this.props;
    return (
      <Item
        accountData={accountData}
        handleActiveItem={handleActiveItem}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        isActive={isActive}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.accounts.isLoading
});

const mapDispatchToProps = {
  deleteAccount,
  setAccountToEdit
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
