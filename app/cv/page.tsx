"use client";



import React, { useState } from "react";





import html2canvas from 'html2canvas';
import jsPDF from "jspdf"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, FirebaseProvider } from "@/app/components/firebase"; // Adjust the import to your file structure

// import  {analytics}  from "@/app/components/firebase"
// import { getAnalytics, isSupported } from "firebase/analytics";




export default function Home() {
//   const shortenURL = async (url) => {
//     const accessToken = '8dfef3b453e86d27091cb9aeb75e23618e6db806'; // Your Bitly API key
//     const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;
  
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ long_url: url })
//     });
  
//     if (!response.ok) {
//       throw new Error('Error shortening URL');
//     }
  
//     const data = await response.json();
//     return data.link; // Return the shortened link
//   };


    // Initialize Firebase Analytics

  const [pdflink , setpdflink] = useState("")
  
  
    const downloadPDF = async () => {
      
        const input = document.getElementById("pdfcontent");
        if (input) {
          const canvas = await html2canvas(input);
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgWidth = 190;
          const pageHeight = pdf.internal.pageSize.height;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
    
          let position = 0;
    
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
    
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          
        const pdfOutput = pdf.output('blob');
        console.log(pdfOutput)
        const pdfRef = ref(storage, `pdfs/${Date.now()}_resume.pdf`);
        
        // Upload PDF to Firebase Storage
        uploadBytes(pdfRef, pdfOutput).then((snapshot) => {
          console.log("PDF uploaded successfully", snapshot);
          getDownloadURL(snapshot.ref).then((downloadURL) => {
              console.log("Download URL:", downloadURL);
              setpdflink(downloadURL);
              pdf.save("download.pdf");
          });
      }).catch((error) => {
          console.error("Error uploading PDF:", error);
      });
      
        
   
    }   
        
      //   }
    //   const pdfOutput = pdf.output('blob');
    //   const pdfRef = ref(storage, `pdfs/${Date.now()}_resume.pdf`);

    //   // Upload PDF to Firebase Storage
    //   uploadBytes(pdfRef, pdfOutput).then(async (snapshot) => {
    //     console.log("PDF uploaded successfully", snapshot);
    //     const downloadURL = await getDownloadURL(snapshot.ref);
    //     const shortUrl = await shortenURL(downloadURL);
    //     setpdflink(shortUrl); // Set the shortened link
    //     pdf.save("download.pdf"); // Save the PDF
    //   }).catch((error) => {
    //     console.error("Error uploading PDF:", error);
    //   });
    // }
      };
  const [skill , setskill] = useState(false)
  const [generatedCV, setGeneratedCV] = useState(null);
  
  const [namee ,setName] = useState({name:'',contact:'',email :'',education:'',workexp:'',skills:''})
  const toggle = () => {
    setskill(!skill)};
 
  const data = (e)=> {
    setName({...namee, [e.target.name] : e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setGeneratedCV(namee);
  };

  
  return (
    <FirebaseProvider >
    <div style={{ background: "linear-gradient(#007cc4 ,#1c0794)" }} className="flex flex-col items-center h-auto w-full ">
      <form onSubmit={handleSubmit} className="w-[700px] m-20 rounded-[15px] bg-[rgba(255,255,255,0.7)] border-4 border-black">
        <p style={{ textShadow: "2px 2px 0 black" }} className="text-5xl text-blue-600 text-center">Dynamic Resume Builder</p><br />
        
        <ul className="inline-block">
          <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Personal Information</label>
          <div style={{ textShadow: "1px 1px 0 black" }} className="mt-2 w-[400px] text-blue-600 border border-blue-600 rounded-[6px]">
            <li className="text-[23px] inline-block">
              Name: <input placeholder="Name" type="text" name="name" onChange={data} value={namee.name} required className="h-[23px] bg-[rgba(255,255,255,0.7)] ml-4 rounded-[6px] text-center" />
            </li>
            <li className="text-[23px] inline-block">
              Contact: <input placeholder="Contact" type="number" name="contact" value={namee.contact} onChange={data} required className="h-[23px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center" />
            </li>
            <li className="text-[23px] inline-block">
              Email: <input placeholder="Email" type="email" name="email" value={namee.email} onChange={data} required className="mb-1 h-[23px] bg-[rgba(255,255,255,0.7)] ml-5 rounded-[6px] text-center" />
            </li>
          </div>
        </ul>

        <ul className="inline-block mt-10">
          <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Education</label>
          <div style={{ textShadow: "1px 1px 0 black" }} className="mt-2 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
              <input placeholder="Education" type="text" name="education" value={namee.education} onChange={data} required className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center" />
            </li>
          </div>
        </ul><br />

        <ul className="inline-block">
          <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Work Experience</label>
          <div style={{ textShadow: "1px 1px 0 black" }} className="mt-2 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
            <li>
              <input placeholder="Work experience" type="text" name="workexp" value={namee.workexp} onChange={data} required className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center" />
            </li>
          </div>
        </ul><br />

        {skill && (
          <ul>
            <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Skills</label>
            <div style={{ textShadow: "1px 1px 0 black" }} className="mt-2 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
              <li>
                <input placeholder="Skills" type="text" name="skills" value={namee.skills} onChange={data} className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center" />
              </li>
            </div>
          </ul>
        )}
        <br />
        <button type="button" className="bg-blue-600 text-white h-20 w-full text-3xl rounded-[6px]" onClick={toggle}>Skills</button>
        
        <button type="submit" className=" m-2 h-12 w-32 bg-purple-500 rounded-[6px]">Generate CV</button>
        <div className="w-[400px] inline-block ">
        <button type="button" onClick={downloadPDF} className=" m-2   h-12 w-32 bg-red-500 rounded-[6px]">Download PDF</button>
          
        
         
        
        

       
        </div>
        {pdflink && (
          <a className="m-4  text-blue-400" href={pdflink} target="_blank" rel="noopener noreferrer">{pdflink}</a>
        )}
        
      </form>

      {generatedCV && (
        <div id="pdfcontent" className="m-20 w-[700px] rounded-[15px] bg-[rgba(255,255,255,0.7)]">
          <p style={{ textShadow: "2px 2px 0 black" }} className="text-5xl text-blue-600 text-center">Dynamic Resume Builder</p><br />

          <ul className="inline-block">
            <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Personal Information</label>
            <div style={{ textShadow: "1px 1px 0 black" }} className="p-2 mt-4 w-[450px] text-blue-600 border border-blue-600 rounded-[6px]">
              <li className="text-[23px] inline-block">
                Name: <p className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] mt-0 inline-block rounded-[6px] text-center">{generatedCV.name}</p>
              </li>
              <li className="text-[23px] inline-block">
                Contact: <p className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] mt-2 inline-block rounded-[6px] text-center">{generatedCV.contact}</p>
              </li>
              <li className="text-[23px] inline-block">
                Email: <p className="h-8 w-[350px] bg-[rgba(255,255,255,0.7)] mb-2 mt-2 inline-block rounded-[6px] text-center">{generatedCV.email}</p>
              </li>
            </div>
          </ul>

          <ul className="inline-block mt-10">
            <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Education</label>
            <div style={{ textShadow: "1px 1px 0 black" }} className="mt-4 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
              <li>
                <p className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.education}</p>
              </li>
            </div>
          </ul><br />

          <ul className="inline-block">
            <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Work Experience</label>
            <div style={{ textShadow: "1px 1px 0 black" }} className="mt-4 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
              <li>
                <p className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.workexp}</p>
              </li>
            </div>
          </ul><br />

          <ul>
            <label style={{ textShadow: "1px 1px 0 black" }} className="text-3xl text-blue-600">{">"}Skills</label>
            <div style={{ textShadow: "1px 1px 0 black" }} className="mt-4 w-80 text-blue-600 border border-blue-600 rounded-[6px]">
              <li>
                <p className="h-8 w-[317px] bg-[rgba(255,255,255,0.7)] rounded-[6px] text-center">{generatedCV.skills}</p>
              </li>
            </div>
         
          </ul>
         
        </div>
        
      )}
    </div>
    </FirebaseProvider>
  ) 
;
}




