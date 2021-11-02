import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  Country,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}