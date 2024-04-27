import React from 'react';
import { MdEmail } from "react-icons/md";
import { HiArrowRightCircle } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa";
import "./Contact.css"

function Contact() {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1931de11-cd36-42cb-888f-566aeb690cfb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contactMe'>
      <h1 className='text-white text-xl font-bold text-center'>Contact <span className='text-blue-400'>Me</span></h1>
      <div className='contactform  m-2 ml-1 flex justify-evenly flex-wrap '>
        <div className='SOcial flex flex-col gap-5 mt-12'>
          <div className='email  bg-purple-700 p-5 w-[230px] rounded-2xl text-white '>
            <MdEmail className='text-white text-2xl m-auto'/>
          <h3 className=' text-center font-bold '>Email</h3>
          <h3>Contact@khalidchater.com</h3>
          <a href='mailto:khalidchater077@gmail.com' className='flex gap-2 font-bold'>write Me more<HiArrowRightCircle className=' text-2xl text-blue-500'/></a>
        </div>
        <div className='email bg-purple-700  text-white p-5 w-[230px] rounded-2xl '>
          <FaPhoneAlt className='text-white text-2xl m-auto'/>
          <h3 className='text-center font-bold '>Phone</h3>
         <div className='text-center'>
          <h3>+212 619022619 </h3>
        <a href="tel:+212 619022619" className='flex gap-2 font-bold '>Write Me More <HiArrowRightCircle className=' text-2xl text-blue-500'/> </a>
         </div>
        </div>
        <div className='email bg-purple-700 p-5 w-[230px] rounded-2xl text-white  '>
          <FaLinkedin className='text-white m-auto text-2xl'/>
          <h3 className='text-center font-bold '>Linkden</h3>
          <h3 className='font-bold text-center'>khalid chater</h3>
          <a href="https://www.linkedin.com/in/khalid-chater-683257265/" className='flex gap-2 font-bold'>Write Me  More <HiArrowRightCircle className=' text-2xl text-blue-500'/> </a>
        </div>
        </div>
        
          <form onSubmit={onSubmit} className='form m-3 mt-7  flex flex-col gap-3 '>
          <label htmlFor="" className='font-bold text-white '>Foll Name:</label>
         <input type="text" placeholder='Full Name' className=' bg-purple-50 p-5  pr-24 rounded-xl hover:focus:text-red-700 font-bold' required />
         <label htmlFor="" className='font-bold text-white '>Email:</label>
         <input type="email" placeholder='Ex@gmail.com' className=' bg-purple-50 p-5  pr-24 rounded-xl hover:focus:text-red-700 font-bold'required  />
         <label htmlFor="" className='font-bold text-white '>Message:</label>
         <textarea  cols="1" rows="5" className=' rounded-xl hover:focus:text-red-700 font-bold '></textarea>
         <button type='submit' className=' bg-blue-400 p-3 rounded-xl' >Send Msg</button>
          </form>
        
         
        
       
      
      </div>
     
    </div>
  )
}
export default Contact
