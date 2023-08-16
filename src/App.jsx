
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import AllPlayers from './Components/AllPlayers'
import NewPlayer from './Components/NewPlayer'
import SinglePlayer from './Components/SinglePlayer'

function App() {

  return (
    <>
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/NewPlayer">New Player</Link>
      {/* <Link to="/SinglePlayer">Single Player</Link> */}
    </div>

    <div id="body">
    <Routes>
      <Route path='/' element={<AllPlayers/>} />
      <Route path='/NewPlayer' element={<NewPlayer/>} />
      <Route path='/SinglePlayer' element={<SinglePlayer/>} />
    </Routes>
      {/* <NewPlayer/>
      <AllPlayers/> */}
    </div>
    </>
  )
}

export default App
