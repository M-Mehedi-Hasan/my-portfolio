import React from 'react'
import { projects } from '../constant'
import Button from './Button'


const Portfolio = () => {
  return (
    <div id='projects' className='mx-12 my-20'>
      <h2 className='text-4xl text-white font-bold mb-12 uppercase'>Projects</h2>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-14'>
        {projects.map(project => 
          <section key={project.title} className='text-white border border-white rounded-tl-2xl rounded-br-2xl px-4 pb-7 md:text-left text-center'>
            <h3 className='text-center font-semibold text-xl pt-4 pb-2'>{project.title}</h3>
            <div className='w-[175px] h-[2px] bg-blue-gradient mx-auto mb-4'></div>
            <img src={project.image} alt='project' className=' aspect-[4/3] object-cover'/>
            <p className='mt-5'>{project.details}</p>
            <a href={project.link} target="blank"><Button text="Look it up" /></a>
          </section>)}
      </div>
    </div>
  )
}

export default Portfolio