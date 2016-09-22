import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ 
  className: 'state '+state.loadstate 
})

let Status = (props) => {
  return (
    <div className={props.className}>
      <div className='inner'></div>
    </div>
  )
}

Status.propTypes = {
  className: React.PropTypes.string.isRequired
};

Status = connect(
  mapStateToProps
)(Status)

export default Status
