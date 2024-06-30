import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Search from "../pages/search/Search"
import Categorie from "../pages/categorie/Categorie"
import NavBar from '../components/NavBar'



const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/Categorie' element={<Categorie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
