import React from 'react'
import './Portfolio.css'
import imgPortfolio from '../../assets/portfolio/arrayDestruct.jpg'


const Portfolio = () => {

  const projects = [
    {
      id: 1,
      src: imgPortfolio,
      demo: '',
      code: ''
    },
    {
      id: 2,
      src: imgPortfolio,
      demo: '',
      code: ''
    },
    {
      id: 3,
      src: imgPortfolio,
      demo: '',
      code: ''
    },
    {
      id: 4,
      src: imgPortfolio,
      demo: '',
      code: ''
    },
  ]

  return (
    <div
      name='portfolio'
      className='text-white w-full md:h-screen mt-20 sm:mt-0'
    >

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {projects.map(({ id }) => (
            <div key={id} className='shadow-md shadow-gray-500  rounded-lg duration-200 hover:scale-105'>
              <img
                src={imgPortfolio}
                alt='porfolio'
              />
              <div className='flex items-center justify-center'>
                <a
                  href='#'
                  className='w-1/2 pl-6 py-3 m-4 duration-200 hover:scale-105'
                  target='_blank'
                  rel='noreferrer'
                >
                  Demo
                </a>
                <a
                  href='#'
                  className='w-1/2 pl-12 py-3 m-4 duration-200 hover:scale-105'
                  target='_blank'
                  rel='noreferrer'
                >
                  Code
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>


    </div>
  )
}

export default Portfolio