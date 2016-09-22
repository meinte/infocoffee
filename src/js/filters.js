import {DEFAULT_STATE} from './reducers/uistate'

export const filterRegions = (coffee,uistate) => {
  const toReturn = []
  coffee.map((data) => {
    const isPartOfCountry = (data.land == uistate.selected_country || uistate.selected_country == DEFAULT_STATE)
    const isPartOfVariety = (data.variety.indexOf(uistate.selected_variety)>-1 || uistate.selected_variety == DEFAULT_STATE)
    const isUnique = toReturn.indexOf(data.region)<0
    const doPush = isPartOfCountry && isPartOfVariety && isUnique

    if(doPush){
      toReturn.push(data.region)
    }
  })
  toReturn.sort()
  return toReturn
}

export const filterCountries = (coffee,uistate) => {
  const toReturn = []
  coffee.map((data) => {
    const isPartOfRegion = (data.region == uistate.selected_region || uistate.selected_region == DEFAULT_STATE)
    const isPartOfVariety = (data.variety.indexOf(uistate.selected_variety)>-1 || uistate.selected_variety == DEFAULT_STATE)
    const isUnique = toReturn.indexOf(data.land)<0
    const doPush = isPartOfRegion && isPartOfVariety && isUnique

    if(doPush){
      toReturn.push(data.land)
    }
  })
  toReturn.sort()
  return toReturn
}

export const filterVarieties = (coffee,uistate) => {
  const toReturn = []
  coffee.map((data) => {
    data.variety.map((variety)=>{
      const isPartOfRegion = (data.region == uistate.selected_region || uistate.selected_region == DEFAULT_STATE)
      const isPartOfCountry = (data.land == uistate.selected_country || uistate.selected_country == DEFAULT_STATE)
      const isUnique = toReturn.indexOf(variety)<0
      const doPush = isPartOfRegion && isPartOfCountry && isUnique

      if(doPush){
        toReturn.push(variety)
      }
    })
  })
  toReturn.sort()
  return toReturn
}

export const filterFlags = (coffee,uistate) => {
  const toReturn = []
  const availableCountries = filterCountries(coffee,uistate)
  coffee.map((data) => {
    if(uistate.selected_country != DEFAULT_STATE){
      if(data.land==uistate.selected_country){
        toReturn.push(data.img)
      }
    }else if(availableCountries.indexOf(data.land)>-1){
      toReturn.push(data.img)
    }
  })
  return toReturn

}
