import React from 'react'
import {connect} from 'react-redux'
import ComboBox from '../components/ComboBox'
import {selectCountry, selectRegion, selectVariety} from '../actions'
import {filterRegions, filterCountries, filterVarieties} from '../filters'
import {DEFAULT_STATE} from '../reducers/uistate'

const mapStateToProps = state => ({
  regions: filterRegions(state.coffee, state.uistate),
  countries: filterCountries(state.coffee, state.uistate),
  varieties: filterVarieties(state.coffee, state.uistate),
  country: state.uistate.selectedCountry,
  region: state.uistate.selectedRegion,
  variety: state.uistate.selectedVariety,
  className: `coffeeselectors ${state.loadstate}`
})

const mapDispatchToProps = ({
  onRegionChange: selectRegion,
  onCountryChange: selectCountry,
  onVarietyChange: selectVariety
})

let CoffeeSelectors = props => {
  return (
    <div className={props.className}>
      <ComboBox
        val={props.region}
        items = {props.regions}
        id = "regions"
        label = "Select a Region"
        onChange = {props.onRegionChange} />
      <ComboBox
        val={props.country}
        items = {props.countries}
        id = "countries"
        label = "Select a Country"
        onChange = {props.onCountryChange} />
      <ComboBox
        val={props.variety}
        items = {props.varieties}
        id = "varieties"
        label = "Select a Variety"
        onChange = {props.onVarietyChange} />
    </div>
  )
}

CoffeeSelectors = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeSelectors)

export default CoffeeSelectors
