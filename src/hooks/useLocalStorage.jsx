import React, { useEffect } from 'react'
import {htmlDataState, cssDataState, jsDataState} from '../atoms/atom'

import {
    atom,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

function useLocalStorage() {
    const [htmlData,setHtmlData]= useRecoilState(htmlDataState);
    
    const [cssData,setCssData]= useRecoilState(cssDataState);

    const [jsData, setJsData]=useRecoilState(jsDataState);

    useEffect(()=>{

        const val=setTimeout(()=>{
         localStorage.setItem('html',htmlData);
         setHtmlData(htmlData);
        },2000);
      
        return ()=>{
         clearTimeout(val);
        }
     },[htmlData]);

     useEffect(()=>{

        const val=setTimeout(()=>{
         localStorage.setItem('css',cssData);
         setCssData(cssData);
        },2000);
        return ()=>{
         clearTimeout(val);
        }
     },[cssData]);

     useEffect(()=>{

        const val=setTimeout(()=>{
         localStorage.setItem('js',jsData);
        },2000);
        setJsData(jsData);
        return ()=>{
         clearTimeout(val);
        }
     },[jsData]);
   
    return [htmlData,setHtmlData,cssData,setCssData,jsData,setJsData]
}

export default useLocalStorage