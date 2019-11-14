import * as actionTypes from './action-types';

export const loadRatesRequest = () => ({
  type: actionTypes.LOAD_RATES_REQUEST,
});

export const loadRatesSuccess = rates => ({
  type: actionTypes.LOAD_RATES_SUCCESS,
  payload: {
    rates,
  },
});

export const loadRatesFailure = error => ({
  type: actionTypes.LOAD_RATES_FAILURE,
  payload: {
    error,
  },
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
