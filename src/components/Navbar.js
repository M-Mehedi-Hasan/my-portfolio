import { useState } from 'react'
import { TfiMenuAlt, TfiClose } from 'react-icons/tfi'
import { AiOutlineGithub } from "react-icons/ai" 
import { navLinks } from '../constant'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex justify-between items-center text-white xs:px-6 sm:px-12 pt-7'>
        <h1 className='text-3xl font-bold font-greatVibes'>Mehedi Hasan</h1>
        <div  className='hidden sm:flex'>
            <ul className='flex'>
                {navLinks.map((link, index) =>
                    <li key={link.id} className="mr-10">
                    <a href={`#${link.id}`}> {link.title}</a></li>)}
            </ul>        
            <a href='https://github.com/M-Mehedi-Hasan' target='blank'>< AiOutlineGithub className='w-8 h-8' /></a>
        </div>
        
        <div className=' sm:hidden bg-black'>
            {toggle ? <TfiClose onClick={() => setToggle(prev => !prev)} /> : <TfiMenuAlt onClick={() => setToggle(prev => !prev)} />}
            <div className={`${toggle ? "flex" : 'hidden'} absolute top-12 right-5 mx-4 my-2 min-w-[140px] rounded bg-gray-900`}>
                <ul className='flex flex-col flex-1 items-center '>
                {navLinks.map((link) =>
                    <li key={link.id} className="my-2">
                    <a href={`#${link.id}`}> {link.title}</a></li>)}
                </ul>
            </div>            
        </div>
    </nav>
  )
}

export default Navbar