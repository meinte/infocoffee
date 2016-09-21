import React from 'react'
import CoffeeSelections from './CoffeeSelections'
import Flag from './Flag'

const App = () => {
  return (
    <div>
      <span>Select a coffee!</span>
      <CoffeeSelections/>
      <Flag className='hello'></Flag>
    </div>
  )
}

export default App
