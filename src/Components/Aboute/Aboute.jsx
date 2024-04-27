import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import image from "../../assets/My photo.png"
import { VscFileSubmodule } from "react-icons/vsc";
import "./Aboute.css"

function Aboute() {
  
  return (
    <section className=' mt-16'>
      <div className='text-center font-bold text-white'>
        
        <h1 className=' font-bold text-2xl text-center'>Aboute <span className='text-blue-600'>Me</span></h1>
      </div>
      <div className='container w-full about_count  grid grid-cols-2 pt-12 '>
        <div className='abouteMe w-[20rem] rounded-3xl pl-10'>
          <div className='image w-[20rem]  bg-blue-600 rounded-3xl  transition-all transf '>
              <img src={image}  className=' rounded-3xl  hover:rotate-0 cursor-pointer transf 
              filter bg-purple-200  w-[100em]'/>
          </div>
        </div>
        <div className='About_content text-white'>
          <div className='Aboute_Cards flex  gap-5 pr-[90px] cursor-pointer' >
            <article className='aboute_Card text-center p-6 w-[170px]  rounded-2xl '>
              <FaAward className='text-center text-2xl m-auto' />
             <a href="#ex" id='ex'><h4>My Skills</h4></a>
              <small className='font-bold '>+5 Skills </small>
            </article>
            <article className='aboute_Card text-center p-6 w-[170px]  rounded-2xl  '>
              <VscFileSubmodule className='text-center text-2xl m-auto' />
              <h4>Project</h4>
              <small className='font-bold '>+10 Mini project </small>
            </article>
           
          </div>
          <p className=' font-light pt-5 select-none  '>
            I am a full stack web developer, capable  of developing various
             types of static or dynamic websites using HTML, CSS, Tailiwnd , 
            JavaScript, React, PHP, Laravel, and MySQL.
          </p>
        </div>
     
      </div>
      <div className='Experience  mt-8  '>
        <h1 className='text-white font-bold text-center text-3xl'  >
          <span className='text-blue-500' >My</span> Skills</h1>
        <div className=' MyCart flex flex-wrap justify-evenly m-5'>
        <div className='form_front-end  bg-purple-900 rounded-xl p-[28px] w-[300px] mt-20 m-auto '>
          <h1 className='text-white font-bold text-center pb-8'>FRONT END</h1>
        <div className=' flex justify-between flex-wrap gap-12 '>
          <article className='text-white flex items-center gap-2'>
            <h4>Html</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>CSS</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>Reactjs</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>javascript</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>Tailwind css</h4>
          <BsPatchCheckFill />
          </article>
        
        </div>
      </div>
        <div className='form_front-end  bg-purple-900 rounded-xl p-[28px] w-[300px] h-[280px] mt-20 m-auto'>
          <h1 className='text-white font-bold text-center pb-8'>Back End</h1>
        <div className='  flex justify-between flex-wrap gap-12 '>
          <article className='text-white flex items-center gap-2'>
            <h4>Laravel(Beginner)</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>MySQL</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>APIS</h4>
          <BsPatchCheckFill />
          </article>  
        </div>
      </div>
        <div className='form_Tols  bg-purple-900 rounded-xl p-[18px] w-[300px] h-[280px] mt-20 m-auto'>
          <h1 className='text-white font-bold text-center pb-8'>Tools</h1>
        <div className=' Tols  flex justify-between flex-wrap gap-12 '>
          <article className='text-white flex items-center gap-2'>
            <h4>Figma</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>Git Github</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>VSCode</h4>
          <BsPatchCheckFill />
          </article>
          <article className='text-white flex items-center gap-4'>
            <h4>Terminal</h4>
          <BsPatchCheckFill />
          </article>
       
         
        </div>
      </div>
        </div>
   
      </div>
    </section>
  );
}

export default Aboute;
