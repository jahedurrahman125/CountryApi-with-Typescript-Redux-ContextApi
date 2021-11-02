import { all } from 'redux-saga/effects'

import productSagas from './product';
import getSaga from './getSaga';

export default function* rootSaga() {
  yield all([getSaga()])
  yield all([...productSagas])
}