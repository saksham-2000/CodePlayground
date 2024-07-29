import { useState } from 'react'
import Home from './pages/Home'
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
   <Home/>
   </RecoilRoot>
  )
}

export default App
