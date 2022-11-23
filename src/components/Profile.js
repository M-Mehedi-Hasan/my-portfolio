import React from 'react'
import Button from './Button'
import Me from "../assets/Me.jpg"
const Profile = () => {
  return (

    <section id='about' className='grid sm:grid-cols-2 gap-2 justify-center text-white items-center mx-12 mt-16'>
      <article className='xs:pb-12 sm:pb-0'>
        <h1 className='xs:text-[25px] sm:text-4xl font-bold leading-normal'>Hello, 
        <br /> 
        I am 
        <span className='text-emerald-500'> Mehedi Hasan</span>, 
        <br /> 
        Front End Developer</h1>
        <p className='text-gray-300 leading-loose mt-4 tracking-wide font-medium sm:mx-10 pb-5'>I love creating web applications. I prefer to use <span className='text-emerald-500'>React JS </span> and <span className='text-emerald-500'>Tailwind CSS</span> for front-end projects. I like to take on new challenges that help me improve my skills.</p>
        <a href='#projects'><Button text="Let's begin" /></a>
      </article>
      <img src={Me} alt='myphoto' className='rounded-md mx-auto' />
    </section>

  )
}

export default Profile