"use client";
import React, { useEffect,useState } from 'react';
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "../../Assets/Images/aboutimage.jpeg"
import { FaFacebook, FaInstagram, FaLinkedin,FaBars, FaTimes} from 'react-icons/fa';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const [isContentVisible, setIsContentVisible] = useState(false);
    
  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <section className=" bg-[#202020] relative">
      
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
      <div className="flex flex-col min-h-full md:flex-row justify-center gap-3 items-center py-[5rem] sm:px-[3rem] lg:px-[5rem] rounded-[2rem]">
        <motion.div
          className=" flex-2 md:w-[35%] sm:h-[87vh] z-1 rounded  bg-black"
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 3 }}
          variants={{
            hidden: { x: 500, opacity: 0 },

            visible: { x: 0, opacity: 1 },
          }}
        >
          <img
            className=" h-[50vh]  sm:h-[87vh]  rounded "
            src={Image}
            alt=""
          />
        </motion.div>
        <div className="flex  flex-col justify-center px-4  sm:px-6 pb-0 flex-1 lg:px-10 xl:px-16 sm:h-[87vh]  z-1 rounded  ">
          <div className="mx-auto text-left ">
            <div className="border-b border-gray-200 pb-10 ">
              <h2 className="mt-8 text-2xl md:text-3xl font-bold leading-9 tracking-tight text-red-600">
                Hammad ahmed
              </h2>
              <p className="mt-2 text-sm md:text-md leading-6 text-gray-300">
              I'm Hammad Ahmed, from Pakistan living in Islamabad, where I work as a Frontend developer. When I am not working I love to Playing Cricket, Traveling, Reading, watching seasons, Movies and spending time with family and friends.
              </p>
            </div>
            <div>
              <div className="border-b border-gray-200 pb-10">
                <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-red-600  capitalize">
                  mern stack Developer
                </p>
                <p className="mt-2 text-sm md:text-md leading-6 text-gray-300">
                Welcome to my portfolio! I'm a passionate MERN Stack developer with a drive for crafting engaging and dynamic web applications. With a foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in building robust, scalable, and efficient full-stack solutions.
                </p>
              </div>

              
            </div>
            <div>
              <div className="border-b border-gray-200 pb-10">
                <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-red-600  capitalize">
                  Experience
                </p>
                <p className="mt-2 text-sm md:text-md leading-6 text-gray-300">
                I have 2 years of experience. In the past years I have worked for <strong className='text-red-600'>Telenor</strong>, <strong className='text-red-600'>Jedah Soft</strong>, and <strong className='text-red-600'>Elysium Sols</strong>,.                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
