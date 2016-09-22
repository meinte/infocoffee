export const LOAD_OK = 'LOAD_OK'
export const LOAD_ERROR = 'LOAD_ERROR'
export const COUNTRY_SELECTED = 'COUNTRY_SELECTED'
export const REGION_SELECTED = 'REGION_SELECTED'
export const VARIETY_SELECTED = 'VARIETY_SELECTED'


export const coffeeLoaded = (result) => ({
  type: LOAD_OK,
  result
})

export const coffeeLoadError = (text) => ({
  type: LOAD_ERROR,
  text
})

export const selectCountry = (country) => ({
  type: COUNTRY_SELECTED,
  country
})

export const selectRegion = (region) => ({
  type: REGION_SELECTED,
  region
})

export const selectVariety = (variety) => ({
  type: VARIETY_SELECTED,
  variety
})
