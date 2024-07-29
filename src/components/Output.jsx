import React, { useEffect, useState } from 'react'

import {
    atom,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  import {htmlDataState, cssDataState, jsDataState} from '../atoms/atom'

  import useLocalStorage from '../hooks/useLocalStorage';

function Output() {

  

//    const htmlData=localStorage.getItem('html');
//    const cssData=localStorage.getItem('css');
//    const jsData=localStorage.getItem('js');

   const [htmlData,setHtmlData,cssData,setCssData,jsData,setJsData]= useLocalStorage();

   const [src,setSrc]=useState();

   const srcCode=`
   <html>
   <body>${htmlData}</body>
   <style>${cssData}</style>
   <script>${jsData}</script>
   </html>
 `

   useEffect(()=>{
       const timeout= setTimeout(()=>{
            setSrc(srcCode);
         },2000);
   
   return ()=>{
     clearTimeout(timeout);
   }
        },[htmlData,jsData,cssData]);

  return (
    <div className='border h-[70vh]'>
    <iframe srcDoc={src} sandbox='allow-scripts' width="100%" height="100%"></iframe>
    </div>
  )
}

export default Output