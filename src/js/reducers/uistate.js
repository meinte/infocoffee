import {COUNTRY_SELECTED} from '../actions'
import {REGION_SELECTED} from '../actions'
import {VARIETY_SELECTED} from '../actions'

export const DEFAULT_STATE = 'empty'

export default (state = {
  selected_region:DEFAULT_STATE,
  selected_country:DEFAULT_STATE,
  selected_variety:DEFAULT_STATE
}, action) => {
  switch (action.type) {
      case COUNTRY_SELECTED:
        return{
          ...state,
          selected_country:action.country
        }
        break
      case REGION_SELECTED:
        return{
          ...state,
          selected_region:action.region
        }
        break
      case VARIETY_SELECTED:
        return{
          ...state,
          selected_variety:action.variety
        }
        break
      default:
        return state
  }
}
