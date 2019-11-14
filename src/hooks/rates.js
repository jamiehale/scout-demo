import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../state/selectors';
import * as actions from '../state/actions';

const useRates = () => {
  const dispatch = useDispatch();

  const loadRates = useCallback(() => {
    dispatch(actions.loadRatesRequest());
  }, [dispatch]);

  const clearError = useCallback(() => {
    dispatch(actions.clearError());
  }, [dispatch]);

  const rates = useSelector(selectors.getRates);
  const isLoading = useSelector(selectors.isLoading);
  const error = useSelector(selectors.getError);

  return {
    rates,
    isLoading,
    error,
    loadRates,
    clearError,
  };
};

export default useRates;
