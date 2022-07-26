import React from 'react'
import './Home.css'
import HeaderImage from '../../assets/heroImage.png'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='pt-10 h-screen w-full'
    >
      <div
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
      >

        <div
          className='flex flex-col justify-center h-full'
        >

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-xl'>
            I have 3 years of experience building and disigning software. <br />
            Currently, I love to work on web application using
            technologies like. <br />
            React, Next, Sass, Node, JavaScript, and more
          </p>

          <div>
            <Link to='portfolio' smooth={true} duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='ml-2 group-hover:rotate-90 duration-300'>
                <FiArrowRight size={20}/>
              </span>
            </Link>
          </div>
        </div>

        <div >
          <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={HeaderImage} alt='my profile' />
        </div>

      </div>
    </div>
  )
}

export default Home