import React from 'react';
import styled from 'styled-components';
import useRates from './hooks/rates';
import Button from './components/Button';
import RatesTable from './components/RatesTable';
import ErrorModal from './components/ErrorModal';

const StyledRatesTable = styled(RatesTable)``;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Button} {
    margin-top: 32px;
  }
  ${StyledRatesTable} {
    margin-top: 32px;
  }
`;

const App = () => {
  const { rates, isLoading, error, loadRates, clearError } = useRates();

  return (
    <Container>
      <Button
        onClick={loadRates}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load Rates"}
      </Button>
      {rates.length > 0 && (
        <StyledRatesTable
          rates={rates}
        />
      )}
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
