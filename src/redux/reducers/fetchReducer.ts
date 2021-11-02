import { ServerResponse, getActions, getTypes } from '../../types';

const initialStage: ServerResponse = {
  data: [],
  loading: false,
  error: null
}

const fetchReducer = (state = initialStage, action: getActions) => {
  switch (action.type) {
  case getTypes.FETCH_GET_REQUEST:
    return { ...state, loading: true }
  case getTypes.FETCH_GET_SUCCESS:
    return { ...state, loading: false, data: action.payload.data }
  case getTypes.FETCH_GET_FAILURE:
    return { ...state, loading: false, error: action.payload.error }
  default:
    return state;
  }
};


export default fetchReducer;

