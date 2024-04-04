import React, { useRef } from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin,FaBars, FaTimes} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact =()=>{
    const [Name, setName] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [phone, setphone] = useState('');


    const [isContentVisible, setIsContentVisible] = useState(false);
    const form =useRef();
    const handleToggle = () => {
      setIsContentVisible(!isContentVisible);
    };
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm("service_6gfazn1","template_dovyfwr", form.current, {
    //       publicKey: 'SvzjE8cl0x69WTzFm',
    //     })
    //     .then(
    //       () => {
    //         console.log('SUCCESS!');
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       },
    //     );
    //     e.target.reset();
    // };
    const handleSubmit =(e)=>{
     e.preventDefault();

     const serviceId = 'service_6gfazn1';
     const templateId = 'template_dovyfwr';
     const publicKey = 'SvzjE8cl0x69WTzFm';

     const formData ={
      from_email :email,
      from_name : Name,
      phone_number : phone,
      message :message,
     };
     
     emailjs.send(serviceId, templateId,formData, publicKey)
        .then((response)=>{
           console.log('Email sent successfully !', response);
           setName('');
           setemail('');
           setmessage('');
           setphone('');

        })
        .catch((error)=>{
          console.log('Errror sending email',error);
        }
        )
     };
    
    return(
        <section>
            <div class="relative  bg-gray-900 h-[110vh] sm:h-[100vh]">
            <div className='absolute z-40 top-0 right-0 flex justify-end gap-4 p-4 text-red-600'>
                  <a href='#' className='text-red-800'>
                    <FaFacebook size={40} />
                  </a>
                  <a href='#' className='text-red-600 mx-2'>
                    <FaInstagram size={40} />
                  </a>
                  <a href='https://www.linkedin.com/in/hammad-ahmed-340aa3218/' className='text-red-600 mx-2'>
                    <FaLinkedin size={40} />
                  </a>
                  <div className='text-red-600 mx-2' onClick={handleToggle}>
                  {isContentVisible ? <FaTimes size={40} /> : <FaBars size={40} />}
                  </div>
                
               </div>
               {isContentVisible && (
              <div className='fixed top-0 w-[100%] bg-white p-[8rem] text-black h-[100vh] text-center z-10 flex flex-col justify-center items-center'>
                <div 
                className=' border-bottom text-4xl font-bold text-gray-800 pb-6  '
                
                ><a href='/'>HOME</a></div>
                <div
                className=' border-bottom text-4xl font-bold text-gray-800 pb-6  '
                
                ><a href='/About'>ABOUT</a></div>
                <div
                className=' border-bottom text-4xl font-bold text-gray-800 pb-6 '
                
                ><a href='/Work'>WORK</a></div>
                <div
                className=' border-bottom text-4xl font-bold text-gray-800 pb-6  '
                
                ><a href='/Contact'>CONTACT</a></div>
          </div>
               )}
  

    <form  onSubmit={handleSubmit}  class="px-6  pt-0  lg:px-8 lg:py-6 text-left">
      <div class="pt-[4rem]">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-red-600">First name</label>
            <div class="mt-2.5">
              <input 
               type="text"
               placeholder='Your Name'
               value={Name}    
               onChange={(e)=>setName(e.target.value)}           
              class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
       
          <div >
            <label for="email" class="block text-sm font-semibold leading-6 text-red-600">Email</label>
            <div class="mt-2.5">
              <input 
               type="text"
               placeholder='Your Email'
               value={email}    
               onChange={(e)=>setemail(e.target.value)}           
              class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-red-600">Phone number</label>
            <div class="mt-2.5">
              <input 
               type="text"
               placeholder='Your phone number'
               value={phone}    
               onChange={(e)=>setphone(e.target.value)}           
              class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-red-600">Message</label>
            <div class="mt-2.5">
              <input 
               type="text"
               placeholder='Message'
               value={message}    
               onChange={(e)=>setmessage(e.target.value)}           
              class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-end">
          <button type="submit" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send message</button>
        </div>
      </div>
    </form>
  </div>

        </section>
    )
}

export default Contact;
