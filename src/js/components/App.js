import React from 'react'
import CoffeeSelectors from '../Containers/CoffeeSelectors'
import Flag from './Flag'
import Status from '../containers/Status'

const App = () => {
  return (
    <div>
      <span>Select a coffee!</span>
      <CoffeeSelectors/>
      <Flag className='hello' />
      <Status/>
    </div>
  )
}

export default App
