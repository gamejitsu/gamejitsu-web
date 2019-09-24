import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const createStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = reduxCreateStore(reducer, initialState, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(saga)
  return store
}

export default createStore
