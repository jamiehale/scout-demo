import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import Api from '../api';

export const delay = t => new Promise(resolve => setTimeout(resolve, t));

function* loadRates() {
  try {
    const { data: rates } = yield call(Api.fetchRates);
    yield put(actions.loadRatesSuccess(rates));
  } catch (e) {
    yield put(actions.loadRatesFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_RATES_REQUEST, loadRates);
}

export default root;
