import React from 'react'
import CoffeeSelectors from '../Containers/CoffeeSelectors'
import Flags from '../Containers/Flags'
import Status from '../containers/Status'

const App = () => {
  return (
    <div>
      <CoffeeSelectors/>
      <Flags />
      <Status/>
    </div>
  )
}

export default App
