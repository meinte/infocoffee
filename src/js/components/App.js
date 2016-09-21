import React from 'react'
import CoffeeSelections from './CoffeeSelections'
import Flag from './Flag'
import Status from '../containers/Status'

const App = () => {
  return (
    <div>
      <span>Select a coffee!</span>
      <CoffeeSelections/>
      <Flag className='hello' />
      <Status/>
    </div>
  )
}

export default App
