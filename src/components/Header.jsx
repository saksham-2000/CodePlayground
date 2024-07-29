import React from 'react'

import logo from './../assets/images/codepen_logo.jpg'
import whiteLogo from './../assets/images/codepen_logo_white.png'
import nameLogo from './../assets/images/codepen_name_logo.jpg'



function Header() {
  return (
    <div className='bg-white h-[10vh] w-full flex border-2  border-black m-[2px]'>
   <img src={nameLogo} alt="" className='h-[8vh] pl-4  pt-2 w-[20vw]'/>
    <div className='grow'></div>
   </div>
  )
}

export default Header