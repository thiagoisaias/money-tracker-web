import React from "react";
import PropTypes from "prop-types";
import dangerIcon from "assets/icons/danger.svg";
import { Icon, CloseButton, Wrapper } from "../styled";

const Danger = props => {
  const { message, dismissNotification } = props;
  return (
    <Wrapper>
      <Icon src={dangerIcon} />
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

Danger.propTypes = {
  message: PropTypes.string.isRequired,
  dismissNotification: PropTypes.func.isRequired
};

export default Danger;
