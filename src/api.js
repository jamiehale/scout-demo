import axios from 'axios';

const RATES_URL = process.env.REACT_APP_RATES_URL || 'https://api.exchangeratesapi.io/latest';

const fetchRates = remote => () => remote.get(RATES_URL);

export default {
  fetchRates: fetchRates(axios),
};
