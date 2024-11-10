"use client"


export default function Header (){
    return(
        <div className=" w-full h-32 bg-[rgba(24,0,160,0.9)]">
            <ul className="flex justify-evenly  absolute top-12 w-[1000px] text-2xl">
                <a href="/m1" className="bg-black text-white p-2 rounded-[6px] inline-block">
                <li>Milstone 1</li></a>
                <a href="/m3" className="bg-black text-white p-2 rounded-[6px] inline-block">
                <li>Milstone 2</li></a>
                
                <a href="/m4" className="bg-black text-white p-2 rounded-[6px] inline-block">
                <li>Milstone 3</li></a>
                <a href="/m5" className="bg-black text-white p-2 rounded-[6px] inline-block">
                <li>Milstone 4</li></a>
                
             </ul>

        </div>
    )
}