import React from 'react'

const ComboBox = (props) => {
  return (
    <select>
      {props.items.map(function(item) {
        return <option key={item.id}>{item.text}</option>
      })}
    </select>
  )
}

ComboBox.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default ComboBox
