import React, { useState } from 'react'
import { IoIosSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiMinimize1 } from "react-icons/ci";
import { CgMinimizeAlt } from "react-icons/cg";


import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import '../App.css'

import {Controlled as CodeMirror} from 'react-codemirror2'

function Code(props) {
  const {codeData,setCodeData}=props.value;

  const [open,setOpen]=useState(false);

  return (
    <div className={`m-1 ${open?'grow-0':'grow'}`}>
    <div className='h-[40vh]'>
        <div className='flex justify-between h-[4vh]'>
           <div className='flex p-2 bg-black'>
            <div className={'w-6 flex justify-center items-center rounded-md '+ props.iconColor}>
                {props.iconText}
            </div>
            <div className='text-white ml-2'>{props.title}</div>
           </div>
           <div className='flex'>
            <div className='bg-black w-6 m-[6px] flex justify-center'>
           <div className='text-white flex items-center'>
           <IoIosSettings/>
           </div>
            </div>
            <div className='bg-black w-6 m-[6px] flex justify-center'>
            <div className='text-white flex items-center' onClick={()=>{
                setOpen(!open);
              //  console.log("clicked ahaha");
            }}>
            <CgMinimizeAlt />
                </div>
            </div>
           </div>
        </div>
        <div >
        <CodeMirror value={codeData}
        onBeforeChange={(editor, data, val) => {
            setCodeData(val);
          }}
                options={{
                    mode: props.mode,
                    theme: 'material',
                    lineNumbers: true,
                    scrollbarStyle: 'native'
                }}/>
        </div>
        </div>
    </div>
  )
}

export default Code