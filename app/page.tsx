import Image from "next/image"
import bg from "@/app/public/bg.jpeg"
import own from "@/app/public/own.png"


export default function web (){
  return (
    <div style={{backgroundImage: `url(${bg.src}) `,backgroundSize:"cover"}} className="bgr h-[100vh] w-full">
      
      <div className="content flex items-center justify-center h-[500px] ">
        <div className="tbo m-10 relative top-14">
          <p className="text1 text-white text-6xl aminate">Artifacial Inteligence</p>
          <div className="uline h-[1px] w-[580px] bg-white mt-5 "></div>
          <p className="text2 text-white text-9xl mt-10 amat">Web 3.0 Metaverse</p>
        </div >
        <Image  className="pic h-[500px] w-[500px] rounded-full border-4 border-white" src={own} alt="photo"/>
      </div>

    </div>
  )
}





