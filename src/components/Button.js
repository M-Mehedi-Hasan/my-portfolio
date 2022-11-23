import React from 'react'

const Button = ({text}) => {
  return (
    <div className='mt-5'>
    <button className='bg-blue-gradient rounded-full w-[140px] h-[40px]'>{text}</button>
    </div>
  )
}

export default Button