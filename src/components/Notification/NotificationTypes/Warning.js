import React from "react";
import PropTypes from "prop-types";
import warningIcon from "assets/icons/warning.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Warning = props => {
  const { message, dismissNotification } = props;
  return (
    <Wrapper>
      <Icon src={warningIcon} />
      {message}
      <CloseButton
        onClick={() => {
          dismissNotification();
        }}
      >
        &times;
      </CloseButton>
    </Wrapper>
  );
};

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  dismissNotification: PropTypes.func.isRequired
};

export default Warning;
