

import React from 'react'
import peoples from '../assets/peoplescale.mp4'


const Hero = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={peoples} autoPlay loop muted />
        <div className="content">
          <h3 className='font-bold'> Dont feel helpless,lets get you justice</h3>
          <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        </div>
    </div>
  )
}

export default Hero