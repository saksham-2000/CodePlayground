import React from 'react';
import {
  atom,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



export const htmlDataState=atom({
    key: 'htmlDataState',
    default: localStorage.getItem('html')
});

export const cssDataState=atom({
    key: 'cssDataState',
    default: localStorage.getItem('css')
});


export const jsDataState=atom({
    key: 'jsDataState',
    default: localStorage.getItem('js')
});


