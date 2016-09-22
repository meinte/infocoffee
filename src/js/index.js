import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import varieties from './services/coffee-varieties'
import appReducers from './reducers'
import {coffeeLoaded,coffeeLoadError} from './actions'

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
    store.dispatch(coffeeLoadError(err))
  }else{
    store.dispatch(coffeeLoaded(result))
  }
})

