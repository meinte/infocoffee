import React from 'react'
import {connect} from 'react-redux'
import Flag from '../components/Flag'
import {filterFlags} from '../filters'

const mapStateToProps = state => ({
  data: filterFlags(state.coffee, state.uistate)
})

let Flags = props => {
  return (
    <div className="flags-container">
      <div className="inner">
        {props.data.map(function(img, i) {
          return <Flag key = {i} imgSrc = {img} />
        })}
      </div>
    </div>
  )
}

Flags = connect(
  mapStateToProps
)(Flags)

export default Flags
