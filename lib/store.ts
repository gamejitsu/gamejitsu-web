import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const makeStore = (initialState, options): StoreWithSaga => {
  const sagaMiddleware = createSagaMiddleware()
  const store: StoreWithSaga = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(saga)
  return store
}

export interface StoreWithSaga extends Store {
  sagaTask?: Task
}

export default makeStore
