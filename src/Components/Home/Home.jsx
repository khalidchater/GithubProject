import React from 'react'
import './Home.css'
import { TypeAnimation } from 'react-type-animation'
import Route from "../Router/Liyoute"

import image from "../../assets/MyImage.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Url = 'http://localhost:3000/CV.pdf';

function Home() {
  const DownloadFile = (url)=> {
    const filName = url.split("/").pop();
    const Tag = document.createElement("a");
    Tag.href = url;
    Tag.setAttribute("download", filName)
    document.body.appendChild(Tag);
    Tag.click();
    Tag.remove()

   
  }
  return (
  
  <>
    <div className=' container w-full p-32 flex justify-evenly items-center'>
      <div className='Title'>
          <button className=' rounded-md bg-blue-500 p-2  font-bold text-white'>Khalid chater</button>
        <h1  className=' text-red-600 font-bold text-[50px] responsive'>I AM
        <span className=' text-blue-600'>
             <TypeAnimation sequence={[
        
        'Developper',2000,
        'Web Disgner',2000,
        'Web Full Stack',2000
      ]}
      repeat={Infinity}
      speed={50}
      omitDeletionAnimation={true}
      className=' textAnimation font-bold text-[30px]'
      />
        </span>
          </h1>
     
        <p className=' text-white animation'>Experienced frontend developer  with a passion <br />
           for creating visually stunning and user-friendly websites.
        </p>
        <div className='  flex  gap-5 pt-8 buttom '>
      <Link to="/About">
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-6 rounded">
                Aboute Me
        </button>
      </Link>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center" onClick={() => {DownloadFile(Url)}}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download</span>
        </button>
        </div>
        <div className='Icone text-[30px] text-white flex gap-5 p-5 cursor-pointer  '>
          <a href="https://www.linkedin.com/in/khalid-chater-683257265/">
            <FaLinkedin className=' hover:text-blue-700' />
          </a>
          <a href="https://www.facebook.com/khalid.rca.96592?mibextid=JRoKGi">
             <FaFacebook  className=' hover:text-blue-700'/>
          </a>
          <a href="https://twitter.com/Khalidchater12">
              <FaTwitter  className=' hover:text-blue-700'/>
          </a>
          <FaInstagram  className=' hover:text-blue-700'/>


        </div>
        
      </div>
      {/* Image */}
      <div className='Image'>
        <img src={image} alt=""  className=' w-[300px] rounded-[50px]  '/>
      </div>
    </div>
</>
       
  )
}

export default Home