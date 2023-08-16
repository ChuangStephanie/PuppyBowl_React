import { useState } from 'react'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import NewPlayer from './Components/NewPlayer'

function App() {

  return (
    <>
      <NewPlayer/>
      <AllPlayers/>
    </>
  )
}

export default App
