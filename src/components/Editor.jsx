import React, { useEffect, useState } from "react";
import Code from "./Code";

import { htmlDataState, cssDataState, jsDataState } from "../atoms/atom";

import useLocalStorage from "../hooks/useLocalStorage";

import { atom, useRecoilState, useRecoilValue } from "recoil";

function Editor() {
  // const [htmlData,setHtmlData]=useState('<div></div>');
  // const [cssData,setCssData]=useState(`.root{
  //      background-color: red
  // }`);
  // const [jsData,setJsData]=useState('console.log(`Hello World`)');

  // const [htmlData,setHtmlData]= useRecoilState(htmlDataState);

  // const [cssData,setCssData]= useRecoilState(cssDataState);

  // const [jsData, setJsData]=useRecoilState(jsDataState);

  const [htmlData, setHtmlData, cssData, setCssData, jsData, setJsData] =
    useLocalStorage();

  return (
    <div className="flex justify-between bg-gray-800">
      <Code
        title={"HTML"}
        iconColor={"bg-red-500"}
        iconText={"/"}
        mode={"xml"}
        value={{
          codeData: htmlData,
          setCodeData: setHtmlData,
        }}
      />
      <Code
        title={"CSS"}
        iconColor={"bg-blue-300"}
        iconText={"*"}
        mode={"css"}
        value={{
          codeData: cssData,
          setCodeData: setCssData,
        }}
      />
      <Code
        title={"JS"}
        iconColor={"bg-yellow-300"}
        iconText={"( )"}
        mode={"javascript"}
        value={{
          codeData: jsData,
          setCodeData: setJsData,
        }}
      />
    </div>
  );
}

export default Editor;
