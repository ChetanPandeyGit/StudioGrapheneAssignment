import React from 'react'
import './App.css'
import NewProducts from './Components/NewProducts'
import NewsLetter from './Components/NewsLetter'
import Topbar from './Components/TopBar'
import NavAndHero from './Components/NavAndHero'

export default function App() {
  return ( 
  <div className="main">
    <Topbar/>
    <NavAndHero/>
    <NewProducts/> 
    <NewsLetter/>
  </div>
   )
}
