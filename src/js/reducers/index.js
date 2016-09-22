import {combineReducers} from 'redux'
import loadstate from './loadstate'
import coffee from './coffee'
import uistate from './uistate'

const appReducers = combineReducers({
  loadstate,
  coffee,
  uistate
})

export default appReducers
