import * as R from 'ramda';
import * as actionTypes from './action-types';

const initialState = {
  rates: [],
  loading: false,
};

const toSortedRateList = R.compose(
  R.sortBy(R.prop('currency')),
  R.map(([currency, rate]) => ({ currency, rate })),
  R.toPairs,
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_RATES_REQUEST: {
      return {
        rates: [],
        loading: true,
        error: undefined,
      };
    }
    case actionTypes.LOAD_RATES_SUCCESS: {
      const { rates } = action.payload;
      return {
        rates: toSortedRateList(rates),
        loading: false,
      };
    }
    case actionTypes.LOAD_RATES_FAILURE: {
      const { error } = action.payload;
      return {
        rates: [],
        loading: false,
        error,
      };
    }
    case actionTypes.CLEAR_ERROR: {
      return {
        ...state,
        error: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
