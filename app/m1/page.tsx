"use client"


import Image from "next/image";
import React, { useState } from "react";
import own from "@/app/m1/public/own.png"



export default function Home() {
  const [skill , setskill] = useState(false)
  const toggle = () => {
    setskill(!skill)};
 
  
  return (
    <div style={{background: "linear-gradient(#007cc4 ,#1c0794)"}} className="h-[100vh] w-full ">
      {/* <div  className="absolute top-8 right-20 h-[90vh] w-[90%] bg-[rgba(255,255,255,0.7)] rounded-[6px]"></div> */}
      <div  className="  w-[700px] absolute top-40 left-1/3 rounded-[15px] bg-[rgba(255,255,255,0.7)]">
        <p style={{textShadow: "2px 2px 0 black"}}  className="text-5xl text-blue-600 text-center">Rusume Builder</p><br/>
        <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600">
          {">"}Personal Information
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className=" w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Name : Abdul manan</li>
            <li>
            Contact : +923152116859</li>
            <li>
            Email : abdulmananwighio06@gmail.com</li>
            
            </div>
          </ul><br/>
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600">
          {">"}Education
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Intermadiate A level</li> 
            </div>
          </ul><br/>
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600">
          {">"}Work Experince
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Student of Governor Sindh It Course</li> 
            </div>
          </ul><br/>
          {skill && (
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}}  className="text-3xl text-blue-600">
          {">"}Skills
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Typescript , HTML,CSS,Next JS</li> 
            </div><br/>
          </ul>)}
        <button className="bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button>
        <Image className="absolute top-[60px] right-8" src={own} alt="pic" dir="''"  width={250}/>
        </div>
       
      
      
    </div>
    
  );
}
