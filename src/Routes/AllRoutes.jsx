import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Features from '../Pages/Features'
import Priceing from '../Pages/Priceing'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const AllRoutes = () => {
  return (
    <div>
            <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Priceing/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes