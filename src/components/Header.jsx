import React from 'react'

import logo from './../assets/images/codepen_logo.jpg'
import whiteLogo from './../assets/images/codepen_logo_white.png'
import nameLogo from './../assets/images/codepen_name_logo.jpg'
import playgroundIcon from './../assets/images/playgroundIcon.svg'

import ThemeToggle from './ThemeToggle'


function Header() {
  return (
    <header className="p-4 border-b bg-white dark:bg-neutral-900 flex items-center justify-between shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight text-brand dark:text-brand">Code Playground</h1>
      <playgroundIcon/>
      <div className="flex items-center gap-3">
        {/* <div className="hidden sm:block text-sm text-neutral-500 dark:text-neutral-400">HTML • CSS • JS</div> */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}

export default Header