import React from 'react';
import styled from 'styled-components';
import useRates from './hooks/rates';
import HeadPanel from './components/HeadPanel';
import RatesPanel from './components/RatesPanel';

const Container = styled.div``;

const App = () => {
  const { rates, isLoading, error, loadRates } = useRates();

  return (
    <Container>
      <HeadPanel
        loadRates={loadRates}
        isLoading={isLoading}
      />
      <RatesPanel
        rates={rates}
      />
    </Container>
  );
}

export default App;
