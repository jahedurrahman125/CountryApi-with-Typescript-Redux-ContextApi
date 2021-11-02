import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchGetFailure,
  fetchGetSuccess
} from "../actions/getActions";
import { getTypes, mainType } from '../../types';

const getData = () =>
  axios.get<mainType[]>("https://restcountries.com/v2/all");

function* fetchGetSaga() {
  try {
    const response = yield call(getData);
    yield put(
      fetchGetSuccess({ data: response.data }) 
    );
  } catch (e) {
    yield put(fetchGetFailure({ error: e.message }));
  }
}

function* getSaga() {
  yield all([takeLatest(getTypes.FETCH_GET_REQUEST, fetchGetSaga)]);
}

export default getSaga;
