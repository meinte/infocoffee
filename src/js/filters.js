import {DEFAULT_STATE} from './reducers/uistate'

// These filters act whenever a ui state change occurs
// it returns proper data depending on filters set through the selection boxes

function validateState(coffee, uistate) {
  let throwMsg
  if (coffee === null || uistate === null || !Array.isArray(coffee)) {
    throwMsg = 'Coffee or uistate data non existent'
  } else if (
    !uistate.hasOwnProperty('selectedCountry') ||
    !uistate.hasOwnProperty('selectedRegion') ||
    !uistate.hasOwnProperty('selectedVariety')
  ) {
    throwMsg = 'uistate is malformed'
  }

  if (throwMsg) {
    throw new Error(throwMsg)
  }
}

export const filterRegions = (coffee, uistate) => {
  validateState(coffee, uistate)
  const toReturn = []
  coffee.forEach(data => {
    const isPartOfCountry =
      (data.land === uistate.selectedCountry ||
      uistate.selectedCountry === DEFAULT_STATE)

    const isPartOfVariety =
      (data.variety.indexOf(uistate.selectedVariety) > -1 ||
      uistate.selectedVariety === DEFAULT_STATE)

    const isUnique = toReturn.indexOf(data.region) < 0
    const doPush = isPartOfCountry && isPartOfVariety && isUnique

    if (doPush) {
      toReturn.push(data.region)
    }
  })
  toReturn.sort()
  return toReturn
}

export const filterCountries = (coffee, uistate) => {
  validateState(coffee, uistate)
  const toReturn = []
  coffee.forEach(data => {
    const isPartOfRegion =
      (data.region === uistate.selectedRegion ||
      uistate.selectedRegion === DEFAULT_STATE)

    const isPartOfVariety =
      (data.variety.indexOf(uistate.selectedVariety) > -1 ||
      uistate.selectedVariety === DEFAULT_STATE)

    const isUnique = toReturn.indexOf(data.land) < 0
    const doPush = isPartOfRegion && isPartOfVariety && isUnique

    if (doPush) {
      toReturn.push(data.land)
    }
  })
  toReturn.sort()
  return toReturn
}

export const filterVarieties = (coffee, uistate) => {
  validateState(coffee, uistate)
  const toReturn = []
  coffee.forEach(data => {
    data.variety.forEach(variety => {
      const isPartOfRegion =
        (data.region === uistate.selectedRegion ||
        uistate.selectedRegion === DEFAULT_STATE)

      const isPartOfCountry =
        (data.land === uistate.selectedCountry ||
        uistate.selectedCountry === DEFAULT_STATE)

      const isUnique = toReturn.indexOf(variety) < 0
      const doPush = isPartOfRegion && isPartOfCountry && isUnique

      if (doPush) {
        toReturn.push(variety)
      }
    })
  })
  toReturn.sort()
  return toReturn
}

export const filterFlags = (coffee, uistate) => {
  validateState(coffee, uistate)
  const toReturn = []
  const availableCountries = filterCountries(coffee, uistate)
  coffee.forEach(data => {
    if (uistate.selectedCountry !== DEFAULT_STATE) {
      if (data.land === uistate.selectedCountry) {
        toReturn.push(data.img)
      }
    } else if (availableCountries.indexOf(data.land) > -1) {
      toReturn.push(data.img)
    }
  })
  return toReturn
}
