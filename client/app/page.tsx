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
          <p className = "text-gray-500 justify-center text-2xl m-3">Leveraging AI and Blockchain to Deliver Data-Driven Insights To Find Your Dream Home</p>
          <Link className = "py-10" href="/dashboard">
            <div className="bg-main hover:bg-gray-800 hover:scale-110 transition-transform duration-400 text-white font-bold py-2 px-3 rounded-full mt-0">
              <span className='inline'>Get Started    </span>
              <Image className="items-center inline justify-center" src={GetStarted} alt="Get Started Icon" width={20} height={20}/>
            </div>
          </Link>
        </div>  
      </div>
      <footer className="p-1 bg-headerBG">
        <h1 className='text-center text-sm'>© Geese Chasers 2024</h1>
      </footer>
    </div>
  )
}
export default Landing