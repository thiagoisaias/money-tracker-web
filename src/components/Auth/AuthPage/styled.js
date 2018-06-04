import styled from "styled-components";
import { devices } from "utils/devices";

import image from "assets/images/welcome.jpg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  @media ${devices.mediumDown} {
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
    padding: 0 32px;
  }

  @media ${devices.largeUp} {
    width: 40%;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 32px;
  }
`;
