import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const wave = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const WaveDiv = styled.button<{ $animationDelay?: string; }>`
  width: 5px;
  height: 100px;
  background: linear-gradient(45deg, #00c689, #fff);
  margin: 10px;
  animation: ${wave} 1s linear infinite;
  border-radius: 20px;
  border: 1px solid #00c689;
  animation-delay: ${props => props.$animationDelay};
`;
