import styled from "styled-components";

import image from "assets/images/welcome.jpg";

export const WrapperWithBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${image}) bottom no-repeat;
  background-size: cover;
  background-color: #222;
  color: #eee;
  font-size: 36px;
  letter-spacing: 2px;
`;
