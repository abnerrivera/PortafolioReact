import React from 'react'
import './Portfolio.css'

import countriesApi from '../../assets/portfolio/countriesApi.png'
import portfolio from '../../assets/portfolio/portfolio.png'
import bEcommerce1 from '../../assets/portfolio/bEcommerce1.png'


const Portfolio = () => {

  const projects = [
    {
      id: 1,
      src: countriesApi,
      demo: 'https://countries-api-react-abnerdev.vercel.app/',
      code: 'https://github.com/abnerrivera/CountriesApiReact'
    },
    {
      id: 2,
      src: portfolio,
      demo: 'https://portfolio-abnerdev.vercel.app/',
      code: 'https://github.com/abnerrivera/PortafolioReact'
    },
    {
      id: 3,
      src: bEcommerce1,
      demo: 'https://github.com/abnerrivera/BackendEcommerceNodejs',
      code: 'https://github.com/abnerrivera/BackendEcommerceNodejs'
    },

  ]

  return (
    <div
      name="portfolio"
      className="mt-16 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
              <img
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a target='_blank' rel='noreferrer' href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a target='_blank' rel='noreferrer' href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio