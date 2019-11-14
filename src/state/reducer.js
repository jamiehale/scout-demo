import * as actionTypes from './action-types';

const initialState = {
  rates: [],
  loading: false,
};

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
        ...state,
        rates,
        loading: false,
      };
    }
    case actionTypes.LOAD_RATES_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
