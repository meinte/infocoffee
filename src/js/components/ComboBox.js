import React from 'react'
import {DEFAULT_STATE} from '../reducers/uistate'

const ComboBox = (props) => {
  //if option selected is 'Choose Option' val = '-1' => change to null
  return (
    <div>
      <label htmlFor = {props.id}>{props.label}</label>
      <select value = {props.val} id = {props.id} onChange = {(e)=>{props.onChange(e.target.value)}}>
        <option key = 'empty' value={DEFAULT_STATE}>Choose option</option>
        {props.items.map(function(item,i) {
          return <option key={i}>{item}</option>
        })}
      </select>
    </div>
  )
}

ComboBox.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string,
  label:React.PropTypes.string,
  onChange:React.PropTypes.func,
  val:React.PropTypes.string
}

export default ComboBox
