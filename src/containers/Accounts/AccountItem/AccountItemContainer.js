import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  deleteAccount,
  setAccountToEdit
} from "../../../store/actions/accounts/accounts";

import AccountItem from "../../../components/Accounts/AccountItem/AccountItem";

export class AccountItemContainer extends Component {
  handleEdit = () => {
    const { accountData, history, onSetAccountToEdit } = this.props;
    onSetAccountToEdit(accountData);
    history.push(`/accounts/${accountData.id}/edit`);
  };

  handleDelete = () => {
    const { accountData, onDeleteAccount } = this.props;
    if (!window.confirm("Are you sure you want to delete this account?")) {
      return;
    }
    onDeleteAccount(accountData.id);
  };

  render() {
    const {
      accountData,
      handleActiveItem,
      isActive
    } = this.props;
    return (
      <AccountItem
        accountData={accountData}
        handleActiveItem={handleActiveItem}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        isActive={isActive}
      />
    );
  }
}

AccountItemContainer.propTypes = {
  accountData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initialBalance: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
  onSetAccountToEdit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteAccount: accountId => {
      dispatch(deleteAccount(accountId));
    },

    onSetAccountToEdit: account => {
      dispatch(setAccountToEdit(account));
    }
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(AccountItemContainer)
);
