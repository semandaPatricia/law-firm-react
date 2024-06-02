
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react';
import Navbar from './Components/Navbar'
import './index.css'
import './app.css';


import Blog from './Components/Blog';
//import Testimonials from './Components/Testimonials'

import Footer from './Components/Footer';
import Aboutsection from './Components/Aboutsection';
import { Herosection } from './Components/Herosection';
import Feature from './Components/Feature';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Team from './Components/Team';



function App() {
return (
<div >
    <Navbar />
      
     <Herosection/>
      
      <Aboutsection/>
      
  <Services/>
  <Feature/>
  <Team/>
      
      
      
        <Blog/>
        <Contact/>
        <Footer/>
     
        </div>

   
  )
}

export default App
