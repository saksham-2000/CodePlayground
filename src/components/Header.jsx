import React from 'react'

import logo from './../assets/images/codepen_logo.jpg'
import whiteLogo from './../assets/images/codepen_logo_white.png'
import nameLogo from './../assets/images/codepen_name_logo.jpg'
import playgroundIcon from './../assets/images/playgroundIcon.svg'


function Header() {
  return (
    <div className='hover:bg-gray-300 h-[10vh] w-full flex border-2  border-black m-[2px]'>
      <div className='flex w-[5vw]'>
   <img src={whiteLogo} alt="" className='h-[8vh] pt-2 pl-2 rounded-md border-black'/>
      </div>
   <div className='flex items-center w-full text-4xl bold pl-5 font-mono'>Coding Playground</div>
    <div className='grow'></div>
   </div>
  )
}

export default Header