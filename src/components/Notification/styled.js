import styled from "styled-components";

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
`;

export const CloseButton = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  top: 5px;
  right: 8px; 
  color: #DDD;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  ${'' /* top: 76px;
  right: 16px; */}
  bottom: 16px;
  left: 16px;
  width: calc(250px - 32px);
  height: 45px;
  padding: 0 16px;
  background-color: #fff;
  color: #484848;
  border-radius: 2px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #ddd;
  animation-name: display;
  animation-duration: 0.5s;

  @keyframes display {
    0% {
      opacity: 0;
      left: 0;
    }
    100% {
      opacity: 1;
      left: 16px;
    }
  }
`;
