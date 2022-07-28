import React from 'react'
import './Experience.css'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import nextjs from '../../assets/nextjs.png'
import github from '../../assets/github.png'
import nodejs from '../../assets/node.png'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'REACT',
      style: 'shadow-cyan-500'
    },
    {
      id: 5,
      src: nextjs,
      title: 'NEXT',
      style: 'shadow-white'
    },
    {
      id: 6,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-500'
    },
    {
      id: 7,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: nodejs,
      title: 'NODE',
      style: 'shadow-green-300'
    },
  ]

  return (
    <div
      name="experience"
      className="mt-16 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience