import styled from "styled-components";
import { devices } from "utils/devices";

export const Wrapper = styled.div`
  background-color: #fff;
  color: #484848;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    text-align: center;
    padding: 16px;
  }

  @media ${devices.mediumUp} {
    text-align: center;
    margin: 32px auto;
    border-radius: 2px;
    padding: 16px 32px;
  }
`;

export const Description = styled.p`
  margin-bottom: 8px;
`;

export const Value = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
