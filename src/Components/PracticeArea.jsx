import React from 'react'
 import scales from '../assets/scales.png'
import trial from '../assets/trial.png'
 import courtx from '../assets/courtx.png'
import judge from '../assets/supreme-court.png'
 import book from '../assets/lawbook.png'
import court from '../assets/court.png'



const practiceArea = () => {
  return (
    <div className='container'>
      <h6 className='text-center  font-bold mt-10 text-2xl'>  What we cover</h6>
    < div className='practice_main mt-6 mb-6'>
    
  <div className="grid grid-cols-3 gap-16 mx-11 my-10 space-y-4 ">
        
  <div className="carousel-items flex flex-col items-center ">
    <img className='w-14 '   src={scales}    alt="scale" />
    <h1 className=' text-lg font-bold text-center '>Legal counseling</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an . </p>
</div> 
  <div className="carousel-items flex flex-col items-center ">
    <img  className='w-14'   src={trial}  alt="pizza" />
    <h1 className=' text-lg font-bold text-center '> Business law</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an .</p>
  </div> 
  <div className="carousel-items flex flex-col items-center ">
    <img className='w-14'     src={court} alt="courthouse" />
    <h1 className=' text-lg font-bold text-center '>Civil ligitation</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an .</p>
  </div> 
  <div className="carousel-items flex flex-col items-center ">
    <img className='w-14'     src= {courtx} alt="colorhandle" />
    <h1 className=' text-lg font-bold text-center '>insurance defense</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an .</p>
  </div> 
  <div className="carousel-items flex flex-col items-center ">
    <img className='w-14'     src={judge} alt="judge" />
    <h1 className=' text-lg font-bold text-center '>Real estate,land</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an .</p>
  </div> 
  <div className="carousel-items flex flex-col items-center ">
    <img  className='w-14'   src= {book} alt="bok" />
    <h1 className=' text-lg font-bold text-center '>personal injury</h1>
    <p className='text-center '>Even the all-powerful pointing has no control about the blind texts it is an .</p>
  </div> 
 
 
  
</div>
</div>
</div>
      
    
  )
}

export default practiceArea
