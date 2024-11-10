"use client"

import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

import { IoIosMenu } from "react-icons/io";



export default function Header (){
   
    
        const [pro , setpro] = useState(false)
      
        
      
      
        
    const handle = () => {
        setpro(!pro)
    }
    const hide = () => {
        setpro(false);
    };
  

    
   
    
    return(
        // <div  className="bodi  w-full h-24 bg-black"  >
        //   <div className="box flex justify-between ">
        //     <div className="namicon">
        //     <a className="wheel font-bold text-5xl font-serif text-center content-center ml-4 h-20 w-20 rounded-full bg-[rgba(101,238,238,0.98)] inline-block">M </a>
        //     <a className="name ml-4 font-bold text-4xl text-white">Abdul Manan</a>
        //     </div>
        //     <ul className="boxop content-center flex h-full ">
        //         <a href="/" className="op m-2 text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
        //         <li>Home</li></a>
        //         <a href="" className="op m-2 text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
        //         <li>Services</li></a>
                
        //         <a href="" className="op m-2 text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
        //         <li>Contact</li></a>
        //         <a href="" className="op m-2 text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
        //         <li>About</li></a>
                
        //      </ul>
        //      <div onClick={handle} className="lister text-white text-2xl mr-8 mt-3 p-4 flex gap-3 hover:border-2 border-white rounded-[8px] ">Projects <FaChevronDown className="icon" onClick={handle}  /></div>

        //   </div>
        <div  className="bodi  w-full h-24 bg-black"  >
        <div className="box flex justify-between  items-center mx-2 h-full">
          <div className="namicon gap-4 flex items-center">
          <a className="wheel font-bold text-5xl font-serif text-center content-center  h-20 w-20 rounded-full bg-[rgba(101,238,238,0.98)] ">M </a>
          <a className="name  font-bold text-4xl text-white ">Abdul Manan</a>
          </div>
          <ul className="opnav flex justify-between w-[60%] ">
          <ul className="boxop content-center flex h-full gap-4  ">
              <a href="/" className="op  text-xl text-white hover:border-2 border-white rounded-[8px] p-3 ">
              <li>Home</li></a>
              <a href="" className="op text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
              <li>Services</li></a>
              
              <a href="" className="op  text-xl text-white hover:border-2 border-white rounded-[8px] p-3">
              <li>Contact</li></a>
              <a href="" className="op  text-xl text-white hover:border-2 border-white rounded-[8px] p-3 ">
              <li>About</li></a>
              
           </ul >
           <a className="">
           <IoIosMenu className="menubar items-center pb-2 text-white " onClick={handle} /></a>
           <div onClick={handle} className="lister  text-white text-2xl  p-4 flex gap-3 hover:border-2 border-white rounded-[8px]  items-center">Projects <FaChevronDown className="icon" onClick={handle}  /></div>
          
           </ul>
           
        </div>
          {pro &&(
            <ul className="list text-xl text-white w-[330px] rounded-[15px] flex flex-col bg-black absolute right-8 top-28">
            <h1 className="listh font-extrabold  text-center text-2xl">Rusume Builders</h1>
            <div className="w-[95%] h-[1px] bg-white"></div>
            <a href="/m1" target="_blank" rel="noopener noreferrer">
            <li onClick={hide} className="ml-4">Cv</li></a>
            <a href="/m3" target="_blank" rel="noopener noreferrer">
            <li onClick={hide} className="ml-4 ">Editable cv</li></a>
            <a href="/m4" target="_blank" rel="noopener noreferrer">
            <li onClick={hide} className="ml-4 ">Generatable Cv</li></a>
            <a href="/cv" target="_blank" rel="noopener noreferrer">
            <li onClick={hide} className="ml-4 mb-4 ">Make Pdf Cv</li></a>
            </ul>)}
        </div>
    )
}
