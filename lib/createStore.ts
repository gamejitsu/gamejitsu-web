import { createStore as reduxCreateStore, applyMiddleware, Store as ReduxStore } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

export interface State {}

export interface Store extends ReduxStore<State> {
  sagaTask?: Task
}

const createStore = (initialState: State): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const store: Store = reduxCreateStore(reducer, initialState, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(saga)
  return store
}

export default createStore
