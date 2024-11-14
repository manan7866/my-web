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
  const [skill , setskill] = useState(false)
  const [generatedCV, setGeneratedCV] = useState<FormData>();
  const [namee ,setName] = useState<FormData>({name:'',contact:'',email :'',education:'',workexp:'',skills:''})
  const toggle = () => {
    setskill(!skill)};
 
  const data = (e: React.ChangeEvent<HTMLInputElement> )=> {
    setName({...namee, [e.target.name] : e.target.value});
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setGeneratedCV(namee);
  };


  return (
    <div  style={{backgroundImage: `url(${bg.src}) `,backgroundSize:"cover"}} className="flex flex-col justify-center  items-center    w-full ">
     
    <form onSubmit={handleSubmit} className="sms:w-72 items-center rounded-[15px] my-20 bg-[rgba(255,255,255,0.7)]">
      <p style={{textShadow: "2px 2px 0 black"}}  className="sms:text-2xl sms:content-center text-5xl text-center  mx-4 text-blue-600 ">Dynamic Rusume Builder</p><br/>
      
      <ul >
      <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl  text-3xl text-blue-600">
        {">"}Personal Information
        </label>
        <div style={{textShadow: "1px 1px 0 black"}} className="sms:w-60 w-[400px] my-4 text-blue-600 border border-blue-600 rounded-[6px]">
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
        <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
          <li>
          <input placeholder="Education" type="text" name="education" value={namee.education} onChange={data} required className="sms:text-xs h-8 sms:w-60 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
          </div>
        </ul><br/>
        <ul  >
        <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600 ">
        {">"}Work Experince
        </label>
        <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
          <li>
          <input placeholder="Work experince" type="text" name="workexp" value={namee.workexp} onChange={data} required  className="h-8 w-[317px] sms:w-60 bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input></li> 
          </div>
        </ul><br/>
        
        {skill && (
        <ul className="" >
        <label style={{textShadow: "1px 1px 0 black"}}  className="sms:text-2xl text-3xl text-blue-600">
        {">"}Skills
        </label>
        <div style={{textShadow: "1px 1px 0 black"}} className="sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
          <li>
          <input placeholder="Skills" type="text" name="skills" value={namee.skills} onChange={data} required  className="sms:text-xs h-8 w-[317px] sms:w-60 bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"></input>
          {/* <p contentEditable="true"  className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center"> java</p> */}
          </li> 
          </div><br/>
        </ul>)}  <br/>
      <button className=" bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button> 
      <button type="submit" className="m-2 h-12 w-32 bg-purple-500 rounded-[6px]">Generate CV</button>
      
      
      </form>
      {generatedCV && ( <div  className="sms:w-72 items-center rounded-[15px] mb-20 bg-[rgba(255,255,255,0.7)]">
        <p style={{textShadow: "2px 2px 0 black"}}  className="sms:text-2xl sms:content-center text-5xl text-blue-600 text-center  mx-4">Dynamic Rusume Builder</p><br/>
      
         <ul className="">
        <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl  text-3xl text-blue-600">
        {">"}Personal Information
       </label>
         <div style={{textShadow: "1px 1px 0 black"}} className="sms:w-60 w-[480px]  my-4 text-blue-600 border border-blue-600 rounded-[6px]">
         <li className="text-[23px] sms:text-lg flex ">
         Name : <p className=" sms:text-xs h-[26px] pb-2  bg-[rgba(255,255,255,0.7)] rounded-[6px]  text-center">{generatedCV.name}</p></li>
         <li className="text-[23px] sms:text-lg flex">
           Contact : <p className=" sms:text-xs h-[26px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.contact}</p></li>
           <li className="text-[23px] sms:text-lg flex">
           Email : <p className=" sms:text-xs h-[26px] bg-[rgba(255,255,255,0.7)] rounded-[6px]  text-center">{generatedCV.email}</p></li>
          
           </div>
         </ul>
       
        
        
       <ul className=" " >
         <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600">
         {">"}Education
         </label>
         <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
           <li>
           <p className="sms:text-xs h-8 sms:w-60 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.education}</p></li> 
           </div>
         </ul><br/>
         <ul className="" >
         <label style={{textShadow: "1px 1px 0 black"}} className="sms:text-2xl text-3xl text-blue-600 ">
         {">"}Work Experince
         </label>
         <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
           <li>
           <p className="sms:text-xs h-8 sms:w-60 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.workexp}</p></li> 
           </div>
         </ul><br/>
        
        
         <ul className="" >
         <label style={{textShadow: "1px 1px 0 black"}}  className="sms:text-2xl text-3xl text-blue-600">
         {">"}Skills
         </label>
         <div style={{textShadow: "1px 1px 0 black"}} className="sms:text-xs sms:w-60 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
           <li>
           <p className="sms:text-xs h-8 sms:w-60 w-[317px]  bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.skills}</p>
           
           </li> 
           </div><br/>
         </ul>
      </div>)}
     </div>

       

    
    
  )
  }
