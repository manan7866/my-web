"use client"


import Image from "next/image";
import React, { useState } from "react";
import own from "@/app/m1/public/own.png"
import bg from "@/app/public/bg.jpeg"



export default function Home() {
  const [skill , setskill] = useState(false)
  const toggle = () => {
    setskill(!skill)};
 
  
  return (
    <div>
    <div style={{backgroundImage: `url(${bg.src}) `,backgroundSize:"cover"}} className="h-[100vh] flex w-full  items-center justify-center">
      
      <div  className="sms:w-72 items-center rounded-[15px] bg-[rgba(255,255,255,0.7)]">
        <div className="flex">
      <div className="hidden sms:block mb-2  ">
        <Image className="" src={own} alt="pic" dir="''"  width={80}/>
        </div>
      <p style={{textShadow: "2px 2px 0 black"}}  className="sms:text-2xl w-full sms:content-center text-5xl text-center text-blue-600 " >Rusume Builder</p><br/>
      </div>
      
        
        
        
        
       <div className="flex"> 
       
        <div className="" >
        
        
        <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600">
          {">"}Personal Information
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Name : Abdul manan</li>
            <li>
            Contact : +923152116859</li>
            <li>
            Email : abdulmananwighio06@gmail.com</li>
            
            </div>
          </ul><br/>
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600">
          {">"}Education
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Intermadiate A level</li> 
            </div>
          </ul><br/>
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600 ">
          {">"}Work Experince
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Student of Governor Sindh It Course</li> 
            </div>
          </ul><br/>
          {skill && (
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}}  className="sms:text-2xl text-3xl text-blue-600">
          {">"}Skills
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            Typescript , HTML,CSS,Next JS</li> 
            </div><br/>
          </ul>)}
        </div>
        <div className="sms:hidden content-center items-center mx-10">
        <Image className="" src={own} alt="pic" dir="''"  width={250}/>
        </div>
       </div>
       <div>
       <button className="bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button>
       </div>
       </div>
      
      
    </div>
    </div>
    
  );
}
