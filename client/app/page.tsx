import React from 'react'

const Landing = () => {
  return (
    <div>
      <div className = "flex flex-col justify-center items-center h-200 grow py-20">
        <h1 className = "text-white flex justify-center text-6xl pt-10">
        Estate Eagle
        </h1>
        <p className = "flex text-gray-400 justify-center text-2xl pt-20">Expert Insights for Informed Home Buying</p>
      </div>
      <div className = 'px-20 w-10/12 py-20 justify-center items-center '>
        <h1 className = "text-white flex text-center text-3xl pb-5">
          About Us
        </h1>

        <p className = "text-gray-400 flex text-xl flex-grow text-center">
        At Estate Eagle, we're dedicated to revolutionizing the way individuals make real estate decisions. 
        Our mission is to empower homebuyers with the knowledge they need to make informed choices in the dynamic housing market.
        Driven by innovation and fueled by our commitment to excellence, we've developed a cutting-edge platform that leverages advanced analytics and predictive modeling to provide unparalleled insights into past, present, and future housing trends.
        Whether you're a first-time buyer or a seasoned investor, our user-friendly interface and comprehensive data resources are designed to guide you every step of the way.
        We're not just building a product – we're building a community of informed and empowered homebuyers. 
        Join us on this journey as we redefine the future of real estate intelligence.
        </p>
      </div>
    </div>
  )
}
export default Landing