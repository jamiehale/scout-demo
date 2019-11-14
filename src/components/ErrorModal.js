import React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  padding: 16px;
  background: white;
  border: 2px solid black;
  border-radius: 8px;
`;

const Screen = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Window} {
    margin: auto;
  }
`;

const ErrorModal = ({
  message,
  onClose,
}) => (
  <Screen>
    <Window>
      <h1>Error</h1>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </Window>
  </Screen>
);

export default ErrorModal;
