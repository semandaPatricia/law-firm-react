
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
//import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {GoLaw} from 'react-icons/go'


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (

        <nav className='flex justify-center py-2 mx-4 '>
        <div className="flex lg:flex-1 gap-3 " >
           <img
                className="h-20 w-auto"
                src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80"
                alt="firm-logo"
              />
           <h1 className=" font-semibold ">Law firm</h1>
          </div>

          <ul className="app__navlinks flex  sm:flex items-center space-x-4 ">
        <li ><a href="#home">Home</a></li>
        <li ><a href="#practice-areas">Practice Areas</a></li>
        <li ><a href="#testimonials">Testimonials</a></li>
        <li ><a href="#blog">Blog</a></li>
        <li ><a href="#about-us">About us</a></li>
        <li ><a href="#contact-us">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen text-white flex-col">
        <GiHamburgerMenu  className= 'bg-white'    color="#000000" fontSize={20} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex-wrap">
            <GoLaw fontSize={20} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#practice areas" onClick={() => setToggleMenu(false)}>Practice Areas</a></li>
              <li><a href="#testimonials" onClick={() => setToggleMenu(false)}>Testimonials</a></li>
              <li><a href="#blog" onClick={() => setToggleMenu(false)}>Blog</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About Us</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
</nav>




  )
}

export default Navbar
