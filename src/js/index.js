import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import varieties from './services/coffee-varieties'
import appReducers from './reducers'
import {COFFEE_LOADED,COFFEE_LOAD_ERROR} from './actions'

const store = createStore(appReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//TOD PUT SOMEPLACE

varieties.getData((err,result) => {
  if(err){
    store.dispatch(COFFEE_LOAD_ERROR(err))
  }else{
    store.dispatch(COFFEE_LOADED(result))
  }
})

