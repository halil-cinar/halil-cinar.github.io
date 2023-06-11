import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navi from '../navbar/Navi';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import SkillsPage from '../skills/SkillsPage';
import EducationPage from '../education/EducationPage';
import ContactPage from '../contact/ContactPage';
import Deneme from '../toolbox/Deneme';
import { gsap } from 'gsap';

export default function App({...props}){
  const mainRef=useRef()
  const skillPage=useRef()

  const [activeTabId,setActiveTabId]=useState("tab1")
  let [pageSize,setPageSize]=useState({
    width:"",
    height:"",
  })
  window.onresize=(event)=>{
    setPageSize({ width:window.innerWidth,height:window.innerHeight,})
    var div = document.getElementById("EducationPage"); // ID ile div i seç
var rect = div.getBoundingClientRect(); // Konum ve boyut bilgilerini al
console.log(rect.top, rect.right, rect.bottom, rect.left); // Bilgileri yazdır

}



let scrollControl=(height)=>{
  let pages=[
    document.getElementById("HomePage"),
    document.getElementById("AboutPage"),
    document.getElementById("SkillsPage"),
    document.getElementById("EducationPage"),
    document.getElementById("ContactPage"),
    
  ]

  pages.forEach((element,index) => {
    if(Math.abs(element.getBoundingClientRect().top)<150){
      setActiveTabId("tab"+(index+1))
    }
  });
}


useEffect(()=>{
  //setInterval(()=>setPageSize({ width:window.innerWidth,height:window.innerHeight,}),1000)
})


  return (
    <div style={{height:"100vh",overflow:"hidden"}}>
      
      <Navi activeTab={[activeTabId,(id)=>setActiveTabId(id)]}/>
      <div onScroll={()=>{scrollControl(window.innerHeight)}} style={{overflowY:'scroll',display:"",height:"90vh",overflowX:"hidden "}}>
         <HomePage/>
         <AboutPage/>
         <SkillsPage className="skillPage"/>
         <EducationPage  pageSize={pageSize}/>
         <ContactPage pageSize={pageSize}/>
      </div>
     
    </div>
  );

}