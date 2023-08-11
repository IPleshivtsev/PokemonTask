import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const flareAnimation = keyframes`
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
`;

export const PokemonCardDiv = styled.div`
  width: 200px;
  border: 2px solid black;
  height: 135px;
  text-align: center;
  display: inline-grid;
  margin: 10px;
  align-content: center;
  cursor: pointer;
  border-radius: 15px;
  background: linear-gradient(to bottom right, #82ffd3, #e5f9f2);
  box-shadow: 5px 10px 5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  overflow-x: hidden;

  &:hover {
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
  }

  &:hover .flare {
    position: absolute;
    top: 0;
    height: 100%;
    width: 45px;
    transform: skewX(-45deg);
    left: -150%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4)
    );
    animation: ${flareAnimation} 1s infinite linear;
  }
`;
