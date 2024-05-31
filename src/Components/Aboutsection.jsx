import React from 'react'

const Aboutsection = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
  
          <p className="mt-4">
          Founded in 2008, Our Agency has over 20 lawyers
far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate voluptas quaerat ullam, molestias sed exercitationem obcaecati saepe atque accusamus.</p>
  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutsection