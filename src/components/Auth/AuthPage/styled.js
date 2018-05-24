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
    max-width: 400px;
    padding: 0 32px;
  }

  @media ${devices.largeUp} {
    width: 40%;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 32px;
  }
`;

export const PictureWrapper = styled.div`
  color: #eee;
  position: relative;

  @media ${devices.mediumDown} {
    display: none;
  }

  @media ${devices.largeUp} {
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      url(${image}) center no-repeat;
    background-size: cover;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PictureTitle = styled.h2`
  font-size: 2.5em;
  letter-spacing: 1px;
  margin-bottom: 16px;
  font-weight: 600;
  margin-left: 55px;
`;

export const PictureSubtitle = styled.p`
  font-size: 16px;
  color: #ddd;
  opacity: 0.9;
  margin-left: 57px;
`;

export const PhotoCredit = styled.span`
  position: absolute;
  color: #ddd;
  font-size: 12px;
  bottom: 16px;
  right: 8px;
  cursor: default;
`;
