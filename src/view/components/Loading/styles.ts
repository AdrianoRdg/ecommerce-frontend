import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContent = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 12px solid #9f9f9f;
  border-top: 12px solid transparent;
  border-radius: 50%;
  animation: ${Rotate} 1s linear infinite;
`;
