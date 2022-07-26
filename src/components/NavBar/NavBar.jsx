import React, { useState } from 'react'
//styles
import './NavBar.css'
//icons
import { FaBars, FaTimes } from 'react-icons/fa'
//react scroll
import { Link } from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    }
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black z-50 fixed px-4'>
      <div>
        <h1 className='ml-10 text-4xl font-signature'>AbnerDev</h1>
      </div>

      <ul className='mr-10 hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-300'
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-125 duration-300'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default NavBar