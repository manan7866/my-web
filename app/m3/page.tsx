"use client"


import Image from "next/image";
import React, { useState } from "react";
import own from "@/app/public/own.png"



export default function Home() {
  const [skill , setskill] = useState(false)
  const [generatedCV, setGeneratedCV] = useState(null);
  const [namee ,setName] = useState({name:'',contact:'',email :'',education:'',workexp:'',skills:''})
  const toggle = () => {
    setskill(!skill)};
  const handle = () => {
      setskill(false)
  }
  const data = (e: any )=> {
    setName({...namee, [e.target.name] : e.target.value});
  }
  
  const handleSubmit = (e : any) => {
    e.preventDefault();
  
    setGeneratedCV(namee);
  };

  
  return (
    <div  style={{background: "linear-gradient(#007cc4 ,#1c0794)"}} className="flex flex-col   items-center   h-[1500px] w-full ">
      {/* <div  className="absolute top-8 right-20 h-[90vh] w-[90%] bg-[rgba(255,255,255,0.7)] rounded-[6px]"></div> */}
      <form onSubmit={handleSubmit} className=" w-[700px] m-20  rounded-[15px] bg-[rgba(255,255,255,0.7)]">
        <p style={{textShadow: "2px 2px 0 black"}}  className="text-5xl text-blue-600 text-center">Dynamic Rusume Builder</p><br/>
        
        <ul className="inline-block">
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600 ">
          >Personal Information
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className=" w-[400px] text-blue-600 border border-blue-600 rounded-[6px]">
            <li className="text-[23px] inline-block">
            Name : <input placeholder="Name" contentEditable="true" type="text" name="name" onChange={data} value={namee.name}  required className=" h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input> </li>
            <li className="text-[23px] inline-block">
            Contact : <input placeholder="Contact" contentEditable="true" type="number" name="contact" value={namee.contact} onChange={data} required  className=" h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li>
            <li className="text-[23px] inline-block">
            Email : <input placeholder="Email" type="email" name="email" value={namee.email} onChange={data} required  className=" h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li>
            
            </div>
          </ul>
         
          
          
          <ul className=" inline-block mt-10 " >
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600">
          >Education
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Education" type="text" name="education" value={namee.education} onChange={data} required className="h-8 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
            </div>
          </ul><br/>
          <ul className=" inline-block " >
          <label style={{textShadow: "1px 1px 0 black"}} className="text-3xl text-blue-600">
          >Work Experince
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Work experince" type="text" name="workexp" value={namee.workexp} onChange={data} required  className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
            </div>
          </ul><br/>
          
          {skill && (
          <ul className="" >
          <label style={{textShadow: "1px 1px 0 black"}}  className="text-3xl text-blue-600">
          >Skills
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Skills" type="text" name="skills" value={namee.skills} onChange={data} required  className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input>
            {/* <p contentEditable="true"  className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"> java</p> */}
            </li> 
            </div><br/>
          </ul>)}  <br/>
        <button className=" bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button> 
        
        </form>
        </div>

  )}