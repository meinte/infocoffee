import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import varieties from './services/coffee-varieties'
import appReducers from './reducers'
import {setLoaded,setLoadError} from './actions'

console.log('init')
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
    store.dispatch(setLoaderror(err))
  }else{
    store.dispatch(setLoaded())
  }
  console.log(err)
  console.log(result)
})

