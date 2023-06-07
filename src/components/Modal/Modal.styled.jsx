import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  animation-name: opacity;
  animation-duration: 350ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  animation-name: scale;
  animation-duration: 350ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

export const Img = styled.img``;
