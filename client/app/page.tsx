import React from 'react';
import Link from 'next/link'
import GetStarted from '../public/GetStarted.svg'
import Image from 'next/image';
import Header from '../components/Header'

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="skyline  border-b-4 border-headerBG">
        <div className = "flex flex-col justify-center items-center h-200 grow py-16">
          <h1 className = "text-main justify-center text-7xl tracking-wider">
            Estate Eagle
          </h1>
          <p className = "text-gray-500 justify-center text-2xl m-3">Data-Driven Insights To Find Your Dream Home</p>
          <Link className = "py-10" href="/dashboard">
            <div className="bg-main hover:bg-gray-800 hover:scale-110 transition-transform duration-400 text-white font-bold py-2 px-3 rounded-full mt-0">
              <span className='inline'>Get Started    </span>
              <Image className="items-center inline justify-center" src={GetStarted} alt="Get Started Icon" width={20} height={20}/>
            </div>
          </Link>
        </div>  
      </div>
      <div className='flex flex-row w-full'>
        <div className="one w-1/3 bg-black px-8 py-10">
          <h1 className="text-white text-center">Our Goal</h1>
          <p className='text-white text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sequi ratione unde magnam deserunt mollitia delectus cumque odio nobis ut. Molestiae laborum atque alias aliquid saepe maiores velit ipsam provident!</p>
        </div>
        <div className="two w-1/3 bg-white px-8 py-10">
          <h1 className="text-black text-center">something</h1>
          <p className='text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi maxime praesentium maiores quam voluptates similique rerum tempore consequuntur temporibus. Esse et explicabo, odit ducimus a eius quaerat omnis voluptates!</p>
        </div>
        <div className="three w-1/3 bg-black px-8 py-10">
          <h1 className="text-white text-center">Title</h1>
          <p className='text-white text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, reprehenderit, numquam animi delectus, quos dolorem mollitia dignissimos asperiores fugiat perferendis quibusdam aspernatur veritatis itaque vero assumenda cupiditate neque eum repudiandae.</p>
        </div>
        {/* <h1 className = "w-1/2 text-smokeGrey flex justify-center text-3xl pb-5 align-middle">
          Our Goal
        </h1>
        <p className = "w-2/3 text-smokeGrey flex-grow text-center">
        At Estate Eagle, we're dedicated to revolutionizing the way individuals make real estate decisions. 
        Our mission is to empower homebuyers with the knowledge they need to make informed choices in the dynamic housing market.
        We have developed a cutting-edge platform that leverages advanced analytics and predictive modeling to provide unparalleled insights into past, present, and future housing trends.
        Whether you're a first-time buyer or a seasoned investor, our user-friendly interface and comprehensive data resources are designed to guide you every step of the way.
        We're not just building a product – we're building a community of informed and eduated homebuyers. 
        Join us on this journey as we redefine the future of real estate intelligence.
      </p>*/}
      </div> 
      <footer className="p-1 bg-headerBG">
        <h1 className='text-center text-sm'>© Geece Chasers 2024</h1>
      </footer>
    </div>
  )
}
export default Landing