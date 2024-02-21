import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar'
import CardsDetails from './Components/CardsDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart/:id' element={<CardsDetails/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
