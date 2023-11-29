import React from 'react'
import Navigation from './Components/Navigation'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home1 from './Components/Home1'
import Contact from './Components/Contact'
import  WeatherApp from  './Components/WeatherApp/WeatherApp'
import ReactPlayer from 'react-player'

const App = () => {
  return (
    <div>
      <Router>
        <div>
      <Navigation/>
    </div>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/weather' element={<WeatherApp/>}/>

    </Routes>
    </Router>
    </div>
  )
}

export default App