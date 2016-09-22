import {LOAD_OK,LOAD_ERROR,LOADING} from '../actions'

export default (state = 'loading', action) => {
  switch (action.type) {
    case LOAD_OK:
      return 'loaded'
    case LOAD_ERROR:
      return 'error'
    default:
      return state
  }
}
