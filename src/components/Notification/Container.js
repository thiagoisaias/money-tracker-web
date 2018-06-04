import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { dismissNotification } from "store/actions/notifications/notifications";

import Notification from "./Notification";

export class Container extends Component {
  static propTypes = {
    type: PropTypes.oneOf(["DANGER", "SUCCESS", "WARNING"]),
    message: PropTypes.string,
    dismissNotification: PropTypes.func
  };

  render() {
    const { type, message, dismissNotification } = this.props;
    return (
      <Notification
        type={type}
        message={message}
        dismissNotification={dismissNotification}
      />
    );
  }
}

const mapStateToProps = state => ({
  type: state.notifications.type,
  message: state.notifications.message
});

const mapDispatchToProps = {
  dismissNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
