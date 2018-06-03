import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { dismissNotification } from "store/actions/notifications/notifications";

import Notification from "./Notification";

export class Container extends Component {
  render() {
    const { type, message, onDismiss } = this.props;
    return <Notification type={type} message={message} onDismiss={onDismiss} />;
  }
}

Container.propTypes = {
  type: PropTypes.oneOf(["DANGER", "SUCCESS", "WARNING"]),
  message: PropTypes.string,
  onDismiss: PropTypes.func
};

const mapStateToProps = state => ({
  type: state.notifications.type,
  message: state.notifications.message
});

const mapDispatchToProps = {
  onDismiss: dismissNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
