import React from 'react'
import { connect } from 'react-redux'
import ComboBox from '../components/ComboBox'

const getApplicableRegions = (coffee) =>{
  return [
    {id:1, text:'hello'},
    {id:2, text:'hello2'}
  ]
}

const mapStateToProps = (state) => ({
  regions: getApplicableRegions(state.coffee),
  countries: getApplicableRegions(state.coffee),
  varieties: getApplicableRegions(state.coffee),
})
const mapDispatchToProps =  null
let CoffeeSelectors = (props) => {
  return (
    <form>
      <ComboBox items = {props.regions}/>
      <ComboBox items = {props.countries}/>
      <ComboBox items = {props.varieties}/>
    </form>
  )
}

CoffeeSelectors.propTypes = {
  
};

CoffeeSelectors = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeSelectors)

export default CoffeeSelectors
