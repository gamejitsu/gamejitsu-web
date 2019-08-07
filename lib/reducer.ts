import { State } from './createStore'

const initialState: State = {}

const reducer = (state = initialState, action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
