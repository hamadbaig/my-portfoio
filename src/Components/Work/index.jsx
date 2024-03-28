import React, { useEffect,useState } from 'react';
import Image from "../../Assets/Images/127sportsintensity.png";
import Image2 from "../../Assets/Images/barberweb.png";
import Image3 from "../../Assets/Images/bodega.png";
import Image4 from "../../Assets/Images/elysium.png";
import { useAnimation, motion } from "framer-motion";
import Image5 from "../../Assets/Images/NickRoffeis.png"
import { useInView } from "react-intersection-observer";

import { FaFacebook, FaInstagram, FaLinkedin,FaBars, FaTimes} from 'react-icons/fa';

const Work =()=>{
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
      <section>
            <div className='sticky z-40 top-0 right-0 flex justify-end gap-4 p-4 text-red-600'>
                  <a href='#' className='text-red-800'>
                    <FaFacebook size={40} />
                  </a>
                  <a href='#' className='text-red-600 mx-2'>
                    <FaInstagram size={40} />
                  </a>
                  <a href='#' className='text-red-600 mx-2'>
                    <FaLinkedin size={40} />
                  </a>
                  <div className='text-red-600 mx-2' onClick={handleToggle}>
                  {isContentVisible ? <FaTimes size={40} /> : <FaBars size={40} />}
                  </div>
                
               </div>
               {isContentVisible && (
              <div className='sticky top-0 w-[100%] bg-white p-[8rem] text-black h-[100vh] text-center z-10 flex flex-col justify-center items-center'>
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
        <div className='flex h-[100vh]'>
            <div className='relative slider-container w-[50%]'>
            <img
                src={Image2} 
                alt="Sliding Image"
                className="sliding-image"
            />
            <div className='absolute bottom-0 left-[35%] w-[30%] h-[200px] rounded-[50%] text-3xl text-white bg-gray-800 flex items-center justify-center'>
                 Hover me
            </div>
            </div>
            <div className='bg-[#1D1D1D] h-[100vh] w-[50%] text-red-600  flex flex-col gap-6 p-[5rem] justify-center'> 
            <h2 className='text-4xl font-bold text-left'>2MGAB | Master Barber</h2>
            <p className='text-2xl text-left'>A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles. JavaScript enhances interactivity with dynamic content such as booking forms and image sliders.  .</p>
            <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
              
                transition={{ type: "spring", duration: 1}}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' btn text-3xl  text-red-600 text-3xl  border-[2px] border-red-600 w-[200px] h-[60px] flex justify-center items-center '
              ><a href='https://2mgab.com/'>Visit Website</a></motion.div>
            </div>
            
        </div>
        <div className='flex h-[100vh] flex-row-reverse'>
           
           <div className='  relative slider-container w-[50%]'>
           <img
               src={Image4} 
               alt="Sliding Image"
               className="sliding-image"
           />
            <div className='absolute bottom-0 left-[35%] w-[30%] h-[200px] rounded-[50%] text-3xl text-white bg-gray-800 flex items-center justify-center'>
                 Hover me
            </div>
           </div>
           <div className='bg-[#1D1D1D] h-[100vh] w-[50%] text-red-600  flex flex-col gap-6 p-[5rem] justify-center'> 
            <h2 className='text-4xl font-bold text-left'>Elysium Sols</h2>
            <p className='text-2xl text-left'>
              A dynamic business website, crafted with JavaScript, Next.js, and Tailwind CSS,
              showcases an engaging design with smooth animations. Featuring a comprehensive portfolio, a dedicated team section,
              and client testimonials, it highlights the company's expertise and credibility.
            </p>
            <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
              
                transition={{ type: "spring", duration: 1 }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' btn text-3xl  text-red-600 text-3xl  border-[2px] border-red-600 w-[200px] h-[60px] flex justify-center items-center '
              >Visit Website</motion.div>
            </div>
       </div>
        <div className='flex h-[100vh]'>
           
            <div className='relative slider-container w-[50%]'>
            <img
                src={Image5} 
                alt="Sliding Image"
                className="sliding-image"
            />
             <div className='absolute bottom-0 left-[35%] w-[30%] h-[200px] rounded-[50%] text-3xl text-white bg-gray-800 flex items-center justify-center'>
                 Hover me
            </div>
            </div>
            <div className='bg-[#1D1D1D] h-[100vh] w-[50%] text-red-600  flex flex-col gap-6 p-[5rem] justify-center'> 
            <h2 className='text-4xl font-bold text-left'>Nick Roffeis</h2>
            <p className='text-2xl text-left'>Project Statement: Nick Roffeis is from Austria and advertising design student in Berlin.</p>
             <p className='text-2xl text-left'>Overview: This website is developed with HTML5, CSS3 and for animations I have used JQuery.   </p>
            <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
              
                transition={{ type: "spring", duration: 1, }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' btn text-3xl  text-red-600 text-3xl  border-[2px] border-red-600 w-[200px] h-[60px] flex justify-center items-center '
              ><a href='https://sleepy-curie-1851c9.netlify.app/'>Visit Website</a></motion.div>
            </div>
        </div>
        <div className='flex h-[100vh] flex-row-reverse'>
           
           
          
           <div className='relative slider-container w-[50%]'>
           <img
               src={Image3} 
               alt="Sliding Image"
               className="sliding-image"
           />
            <div className='absolute bottom-[-2rem] left-[35%] w-[30%] h-[200px] rounded-[50%] text-3xl text-white bg-gray-800 flex items-center justify-center'>
                 Hover me
            </div>
           </div>
           <div className='bg-[#1D1D1D] h-[100vh] w-[50%] text-red-600  flex flex-col gap-6 p-[5rem] justify-center'> 
            <h2 className='text-4xl font-bold text-left'>Bodega</h2>
            <p className='text-2xl text-left'>A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles.  JavaScript enhances interactivity with dynamic content such as booking forms and image sliders. </p>
            <motion.div 
                initial="hidden"
                ref={ref}
                animate={controls}
              
                transition={{ type: "spring", duration: 1, }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className=' btn text-3xl  text-red-600  border-[2px] border-red-600 w-[200px] h-[60px] flex justify-center items-center '
              >Visit Website</motion.div>
            </div>
       </div>
      </section>
    )
}
export default Work;