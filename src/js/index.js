import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'

require("../css/main.css")

console.log('init')

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <App/>,
  rootEl
)

render()
