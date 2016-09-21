import { combineReducers } from 'redux'
import appstate from './appstate'
import coffee from './coffee'

const appReducers = combineReducers({
  appstate,
  coffee
})

export default appReducers
