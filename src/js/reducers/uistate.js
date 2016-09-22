import {COUNTRY_SELECTED, REGION_SELECTED, VARIETY_SELECTED} from '../actions'

export const DEFAULT_STATE = 'empty'

export default (state = {
  selectedRegion: DEFAULT_STATE,
  selectedCountry: DEFAULT_STATE,
  selectedVariety: DEFAULT_STATE
}, action) => {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedCountry: action.country
      }
    case REGION_SELECTED:
      return {
        ...state,
        selectedRegion: action.region
      }
    case VARIETY_SELECTED:
      return {
        ...state,
        selectedVariety: action.variety
      }
    default:
      return state
  }
}
