

import React from 'react'
import scale from '../assets/swingingscale.mp4'



const AboutUs = () => {
  
  return (
    <div className='flex mt-4 max-h-screen'>
 
  <div className='mx-4'>
  <p className='mx-2.5 bg-dark'>
      Founder in 1856, Our Agency has over 175 lawyers
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>  
  </div>

    <div className="app__video">
    <video
      
      src={scale}
      loop
      muted
      autoplay
    />
    
    
  </div>
  </div>
  )
}

export default AboutUs