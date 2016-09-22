import {LOAD_OK} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_OK:
      return action.result
    default:
      return state
  }
}
