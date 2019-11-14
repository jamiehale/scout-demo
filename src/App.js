import React from 'react';
import styled from 'styled-components';
import useRates from './hooks/rates';
import HeadPanel from './components/HeadPanel';
import RatesPanel from './components/RatesPanel';
import ErrorModal from './components/ErrorModal';

const Container = styled.div``;

const App = () => {
  const { rates, isLoading, error, loadRates, clearError } = useRates();

  return (
    <Container>
      <HeadPanel
        loadRates={loadRates}
        isLoading={isLoading}
      />
      <RatesPanel
        rates={rates}
      />
      {error && (
        <ErrorModal
          message={error}
          onClose={clearError}
        />
      )}
    </Container>
  );
}

export default App;
