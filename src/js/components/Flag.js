import React from 'react'


const Flag = (props) => {
  return (
    <img src={props.imgSrc} alt="Image of country flag" />
  )
}

Flag.propTypes = {
  imgSrc: React.PropTypes.string.isRequired
}

export default Flag
