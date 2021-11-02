import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const initState: AppState = {
  country: {
    inCart: [],
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware] //  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const dataInCart = localStorage.getItem('inCart');
  const updatedData: AppState = {
    ...initialState,
    country: { inCart: dataInCart === null ? [] : JSON.parse(dataInCart) },
  }
  
  const store = createStore(
    createRootReducer,
    updatedData,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
