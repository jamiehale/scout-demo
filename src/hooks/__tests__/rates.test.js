import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../state/actions';
import useRates from '../rates';

jest.mock('react');
jest.mock('react-redux');

describe('useRates', () => {
  let mockDispatch;
  let mockState;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockState = {
      rates: [1, 2, 3],
      loading: false,
      error: 'Something went wrong',
    };
    useCallback.mockImplementation((f) => f);
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation((f) => f(mockState));
  });

  it('returns rates from state', () => {
    expect(useRates().rates).toStrictEqual([1, 2, 3]);
  });

  it('returns loading flag from state', () => {
    expect(useRates().isLoading).toBe(false);
  });

  it('returns error from state', () => {
    expect(useRates().error).toBe('Something went wrong');
  });

  it('returns a dispatcher for loading rates', () => {
    useRates().loadRates();
    expect(mockDispatch).toHaveBeenCalledWith(actions.loadRatesRequest());
  });

  it('returns a dispatcher for clearing error state', () => {
    useRates().clearError();
    expect(mockDispatch).toHaveBeenCalledWith(actions.clearError());
  });
});
