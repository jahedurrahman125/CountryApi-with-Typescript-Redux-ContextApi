import {
  valuesOf,
  ErrorMessage,
  getTypes,
  FetchGetRequest,
  FetchGetSuccess,
  FetchGetFailure

} from '../../types';

export const fetchGetRequest = (): FetchGetRequest => ({
  type: getTypes.FETCH_GET_REQUEST
});

export const fetchGetSuccess = (
  payload:valuesOf
): FetchGetSuccess => ({
  type: getTypes.FETCH_GET_SUCCESS,
  payload
});

export const fetchGetFailure = (
  payload: ErrorMessage
): FetchGetFailure => ({
  type: getTypes.FETCH_GET_FAILURE,
  payload
});
