import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

export const PokemonDetailsModalDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: ${appear};
  animation-duration: 300ms;
  cursor: default;
`;

export const ModalDialogDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  width: 100%;
  max-width: 550px;
  background: linear-gradient(to bottom right, #82ffd3, #e5f9f2);
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${slideIn};
  animation-duration: 0.5s;
`;

const ModalDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const ModalHeaderDiv = styled(ModalDiv)`
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

export const ModalFooterDiv = styled(ModalDiv)`
  border-top: 1px solid black;
  justify-content: flex-end;
`;

export const ModalCloseSpan = styled.span`
  cursor: pointer;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
  font-size: 25px;
`;

export const ModalBodyDiv = styled.div`
  overflow: auto;
`;

export const ModalContentDiv = styled.div`
  padding: 1rem;
  display: flex;
`;

export const ModalTitleH3 = styled.h3`
  margin: 0;
`;

export const PokemonSpriteBlock = styled.div``;

export const PokemonDetailsBlockDiv = styled.div`
  margin-left: 50px;

  span {
    display: block;
  }
`;

export const ModalCloseButton = styled.button`
  color: black;
  background: #e5f9f2;
  border: 1px solid #00c689;
  cursor: pointer;
  width: 100px;
  user-select: none;
  height: 40px;
  font-size: 16px;

  &:hover {
    background: #5ce5b5;
  }
`;