import React from 'react'
import './SocialLinks.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonPlusFill } from 'react-icons/bs'

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/abnerriveradev/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/abnerrivera',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:abner500edrey@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          ResumeCV <BsFillPersonPlusFill size={30} />
        </>
      ),
      href: '/cvResume.pdf',
      style: 'rounded-br-md',
      download: true,
    }
  ]

  return (
    <div className='flex flex-col top-[68%] left-0 fixed sm:top-[35%]'>
      <ul>
        {links.map(({ id, child, href, download, style }) => (

          <li key={id} className={`bg-gray-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 ${style}`}>
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default SocialLinks