import reducer from '../reducer';
import * as actions from '../actions';

describe('reducer', () => {
  it('returns default state', () => {
    expect(reducer(undefined, { type: 'unspecified' })).toEqual({
      rates: [],
      loading: false,
    });
  });

  it('resets when loading', () => {
    expect(reducer({ a: 1, b: 2 }, actions.loadRatesRequest())).toEqual({
      rates: [],
      loading: true,
    });
  });

  it('maps key/value pairs to array after loading', () => {
    expect(reducer({ a: 1, b: 2 }, actions.loadRatesSuccess({ CAD: 1, JPY: 2, USD: 3 }))).toEqual({
      rates: [
        { currency: 'CAD', rate: 1 },
        { currency: 'JPY', rate: 2 },
        { currency: 'USD', rate: 3 },
      ],
      loading: false,
    });
  });

  it('sets error on failure', () => {
    expect(reducer({ a: 1, b: 2 }, actions.loadRatesFailure('Something went wrong'))).toEqual({
      rates: [],
      loading: false,
      error: 'Something went wrong',
    });
  });

  it('clears the error state', () => {
    expect(reducer({ a: 1, b: 2, error: 'Something went wrong' }, actions.clearError())).toEqual({
      a: 1,
      b: 2,
    });
  });
});
