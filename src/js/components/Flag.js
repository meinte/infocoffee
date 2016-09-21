import React from 'react'


const Flag = (props) => {
  return (
    <div className={props.className}>
      flag
    </div>
  )
}

Flag.propTypes = {
  className: React.PropTypes.string.isRequired
};

export default Flag
