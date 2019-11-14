import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const HeadPanel = ({
  loadRates,
  isLoading,
}) => (
  <Container>
    <button onClick={loadRates}>Load</button>
    {isLoading && (
      <p>Loading...</p>
    )}
  </Container>
);

export default HeadPanel;
