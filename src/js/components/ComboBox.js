import React from 'react'

const ComboBox = () => {
  return (
    <div>
      ComboBox
    </div>
  )
}

ComboBox.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default ComboBox
