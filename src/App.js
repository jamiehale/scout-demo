import React from 'react';
import styled from 'styled-components';
import useRates from './hooks/rates';
import LoadButton from './components/LoadButton';
import RatesTable from './components/RatesTable';
import ErrorModal from './components/ErrorModal';

const StyledRatesTable = styled(RatesTable)``;
const StyledLoadButton = styled(LoadButton)``;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${StyledLoadButton} {
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
      <StyledLoadButton
        isLoading={isLoading}
        onLoadRates={loadRates}
      />
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
