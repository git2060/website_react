import React from 'react'
import About from './components/About'
import Shop from './components/Shop'
import Sketing from './components/Sketing'
import Contact from './components/Contact'
import Index from './components/Index'
import Notfound from './components/Notfound'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/sketing" element={<Sketing/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="#" element={<Notfound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App