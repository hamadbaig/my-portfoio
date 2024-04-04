import React, { useEffect,useState } from 'react';
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "../../Assets/Images/personal.png"
import { FaFacebook, FaInstagram, FaLinkedin,FaBars, FaTimes} from 'react-icons/fa';

const Home =()=>{
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
    return(
        <section className=' text-white bg-black h-[100vh] text-left relative'>
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
      
            <div className='z-0 p-[4rem] pl-[2rem] md:p-[6rem] bg-contain bg-no-repeat bg-right  h-[100vh]'
              style={{
                backgroundImage: `url(${Image})`,
              }}>
               
                <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
                
                transition={{ type: "spring", duration: 1,delay: 0.3}}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className='text-[2.5rem] md:text-7xl font-bold pb-3 md:pb-5 hover-translate'>Hello
                </motion.div>
                <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
            
                transition={{ type: "spring", duration: 1,delay: 0.6 }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className='text-[2.5rem] md:text-7xl font-bold text-red-600 pb-3 md:pb-5'>I am</motion.div>
                <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
                
                transition={{ type: "spring", duration: 1,delay: 0.9 }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' text-[2.5rem] md:text-7xl font-bold pb-3 md:pb-5'>Hammad </motion.div>
                <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
                
                transition={{ type: "spring", duration: 1,delay: 1.2 }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' inline-block text-[1.1rem] md:text-4xl font-bold text-red-600 pb-3 md:pb-6 border-t-[4px] border-red-400 '
              >Mern Stack Developer</motion.div>
              <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
              
                transition={{ type: "spring", duration: 1,delay: 1.5 }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' btn text-3xl  text-red-600  border-[2px] border-red-600 w-[200px] h-[60px] flex justify-center items-center '
              >Work</motion.div>
              </div>
              
        </section>
    )
}
export default Home;