import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ 
  className: state.loadstate 
})

let Status = (props) => {
  return (
    <div className={props.className}>{props.className}</div>
  )
}

Status.propTypes = {
  className: React.PropTypes.string.isRequired
};

Status = connect(
  mapStateToProps
)(Status)

export default Status
