import React from 'react'


const Flag = (props) => {
  return (
    <div className='flag-container'>
      <img src={props.imgSrc} alt="Image of country flag" className='flag'/>
    </div>
  )
}

Flag.propTypes = {
  imgSrc: React.PropTypes.string.isRequired
}

export default Flag
