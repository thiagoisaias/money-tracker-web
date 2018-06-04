import React from "react";
import PropTypes from "prop-types";
import successIcon from "assets/icons/success.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Success = props => {
  const { message, dismissNotification } = props;
  return (
    <Wrapper>
      <Icon src={successIcon} />
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

Success.propTypes = {
  message: PropTypes.string.isRequired,
  dismissNotification: PropTypes.func.isRequired
};

export default Success;
