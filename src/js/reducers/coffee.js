import {LOAD_OK} from '../actions'

export default (state = {
  selected_region:null,
  selected_country:null,
  selected_variety:null,
  data:[]
}, action) => {
  switch (action.type) {
      case LOAD_OK:
        return{
          ...state,
          data:action.result
        }
        break;
      default:
        return state
  }
}
