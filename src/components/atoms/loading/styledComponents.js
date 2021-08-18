import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const ContentLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled.div`
  border: 4px solid #3182ce;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
