// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// A country
export type Country = {
  flag: string
  name: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

// Use this union in reducer
export type CountryActions = AddCountryAction | RemoveCountryAction

export type CountryState = {
  inCart: Country[]
}

export type AppState = {
  country: CountryState
}


///-----------



export type languages = {
  name: string,
};

// country api call type
export type mainType = {
  flag: string;
  name: string;
  languages: languages[];
  population: number;
  region: string;
};


export type valuesOf = {
  data: mainType[]
}

export type Order = 'asc' | 'desc';

// A country api response
export type ServerResponse = {
  data: mainType[],
  loading?: boolean | boolean[],
  error?: Error | null
}

export type Column = {
  id: "flag" | "name" | "population" | "languages" | "region" | "actions";
  label: string | "";
  minWidth?: number;
  align?: 'right';
}


// Saga types
export enum getTypes {
  FETCH_GET_REQUEST = "FETCH_GET_REQUEST",
  FETCH_GET_SUCCESS = "FETCH_GET_SUCCESS",
  FETCH_GET_FAILURE = "FETCH_GET_FAILURE"
};
export interface BaseAction {
  type: string;
  payload?: ServerResponse;
}
export interface FetchGetRequest {
  type: typeof getTypes.FETCH_GET_REQUEST;
}

export type FetchGetSuccess = {
  type: typeof getTypes.FETCH_GET_SUCCESS;
  payload: valuesOf
};

export interface ErrorMessage {
  error: string
}
export type FetchGetFailure = {
  type: typeof getTypes.FETCH_GET_FAILURE;
  payload: ErrorMessage
};

export type getActions =
  | FetchGetRequest
  | FetchGetSuccess
  | FetchGetFailure;


export type RootState = {
  country: Country
  data: ServerResponse
};
