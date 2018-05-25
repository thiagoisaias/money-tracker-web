import styled from "styled-components";
import { devices } from "utils/devices";

export const PageWrapper = styled.div`
  @media ${devices.mediumUp} {
    width: 80vw;
    max-width: 900px;
    margin: 0 auto;
  }
`;
