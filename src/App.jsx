
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react';
import Navbar from './Components/Navbar'
import './index.css'
import './app.css'



import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
import Testimonials from './Components/Testimonials'
import PracticeArea from './Components/PracticeArea'
import Footer from './Components/Footer';
import Aboutsection from './Components/Aboutsection';
import { Herosection } from './Components/Herosection';
//import Hero from "./Components/Hero";


function App() {


  return (

     
   <div >
    <Navbar />
      
     <Herosection/>
      
      <Aboutsection/>
  <PracticeArea/>
      <Testimonials/>
      
      <ContactUs/>
        <Blog/>
        <Footer/>
     
        </div>

   
  )
}

export default App
