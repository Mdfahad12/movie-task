import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Collection from './collection/Collection'
import Summary from './summary/Summary'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Collection/>} />
        <Route path='/Summary' element={<Summary/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
