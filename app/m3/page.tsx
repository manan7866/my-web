"use client"



import React, { useState } from "react";
import bg from "@/app/public/bg.jpeg";




export default function Home() {
  interface FormData {
    name: string;
    contact: string;
    email: string;
    education: string;
    workexp: string;
    skills: string;
  }
//  
  const [skill , setskill] = useState(false)
  
  const [namee ,setName] = useState<FormData>({name:'',contact:'',email :'',education:'',workexp:'',skills:''})
  const toggle = () => {
    setskill(!skill)};

  const data = (e: React.ChangeEvent<HTMLInputElement> )=> {
    setName({...namee, [e.target.name] : e.target.value});
  }
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // setGeneratedCV(namee);
  };

  
  return (
    <div  style={{backgroundImage: `url(${bg.src}) `,backgroundSize:"cover"}} className="flex flex-col justify-center  items-center   h-[100vh] w-full ">
     
      <form onSubmit={handleSubmit} className="sms:w-72 items-center rounded-[15px] bg-[rgba(255,255,255,0.7)]">
        <p style={{textShadow: "2px 2px 0 black"}}  className="sms:text-2xl sms:content-center text-5xl text-center text-blue-600 ">Dynamic Rusume Builder</p><br/>
        
        <ul >
        <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl  text-3xl text-blue-600">
          {">"}Personal Information
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:w-64 w-[450px] my-4 text-blue-600 border border-blue-600 rounded-[6px]">
            <li className="text-[23px] sms:text-lg inline-block">
            Name : <input placeholder="Name" contentEditable="true" type="text" name="name" onChange={data} value={namee.name}  required className=" sms:text-xs h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input> </li>
            <li className="text-[23px] sms:text-lg inline-block">
            Contact : <input placeholder="Contact" contentEditable="true" type="number" name="contact" value={namee.contact} onChange={data} required  className="sms:text-xs h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li>
            <li className="text-[23px] sms:text-lg inline-block">
            Email : <input placeholder="Email" type="email" name="email" value={namee.email} onChange={data} required  className="sms:text-xs h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li>
            
            </div>
          </ul>
         
          
          
          <ul >
          <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600">
          {">"}Education
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-64 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Education" type="text" name="education" value={namee.education} onChange={data} required className="sms:text-xs h-8 sms:w-64 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
            </div>
          </ul><br/>
          <ul  >
          <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600 ">
          {">"}Work Experince
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-64 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Work experince" type="text" name="workexp" value={namee.workexp} onChange={data} required  className="h-8 w-[317px] sms:w-60 bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
            </div>
          </ul><br/>
          
          {skill && (
          <ul className="" >
          <label style={{textShadow: "1px 1px 0 black"}}  className="sms:text-2xl text-3xl text-blue-600">
          {">"}Skills
          </label>
          <div style={{textShadow: "1px 1px 0 black"}} className="sms:w-64 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
            <input placeholder="Skills" type="text" name="skills" value={namee.skills} onChange={data} required  className="sms:text-xs h-8 w-[317px] sms:w-64 bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input>
            {/* <p contentEditable="true"  className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"> java</p> */}
            </li> 
            </div><br/>
          </ul>)}  <br/>
        <button className=" bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button> 
        
        </form>
        </div>

  )}
