import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ className: state.appstate })
const mapDispatchToProps =  ({})
let Status = (props) => {
  return (
    <div className={props.className}>{props.className}</div>
  )
}

Status.propTypes = {
  className: React.PropTypes.string.isRequired
};

Status = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status)

export default Status
