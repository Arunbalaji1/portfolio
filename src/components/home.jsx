import { Link } from "react-router-dom";
import heroImage from '../assets/hero.png'
import { Typewriter } from "react-simple-typewriter";
import download from "../assets/download.png"
import resume from "../assets/ARUN_BALAJI_RESUME.pdf"
import Navbar from './navbar';

export default function Home(){

  function handleDownload(){
    const link = document.createElement('a');
    link.href = resume; 
    link.download = 'ARUN_BALAJI_Resume.pdf'; // Desired filename
    link.click();
   
  }
    
  return(<>
     <Navbar/>
     <div className="hero text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] md:h-[80vh] w-[85vw] md:w-[90vw] flex flex-col justify-around  md:grid md:grid-cols-6  content-center mx-auto md:ml-[2vw] lg:mx-auto xl:ml-[6.5vw] mt-[1vh]  md:my-auto md:pt-20 ">
        <div className="  my-3 md:col-span-3  md:my-10   md:ml-[3.5vw] lg:ml-[4vw]  ">
          <div className='name animate-slide-right mt-[3vh] md:m-auto text-[1.6rem] text-center md:text-start md:text-[4vw]  lg:text-[3.2vw]   text-black dark:text-[rgba(255,255,255,0.87)]'>
            Hi! I'm <span className=' text-nowrap ' >Arun Balaji -</span>
            <br />
            <span className="autotyping md:text-[4vw]  lg:text-[4vw]    text-[rgb(235,94,40)]">
               <Typewriter
               words={["Web Developer", "Programer", "AI/ML Enthusiast"]}
               loop={0} // 0 = infinite
               cursor
               cursorStyle="|"
               typeSpeed={80}
               deleteSpeed={50}
               delaySpeed={1500}
               />
         </span>
          </div>
           <br />
           <div className='animate-slide-left md:hidden my-3 '>
            <img src={heroImage} alt="hero_img" className="object-cover animate-floatY " />
            <br />
           </div>
            <p className='text-muted animate-slide-right indent-15 text-[0.85rem] md:text-[0.75rem] my-3 md:my-auto lg:text-[1.05rem]'>
              Aspiring developer with experience in web development and Python automation. Interested in Artificial Intelligence and Machine Learning and passionate about solving problems and building innovative solutions.
            </p>
          <br />
          <div className=' animate-slide-right flex md: gap-5 my-3 md:my-5 items-center justify-around md:justify-start'>
            <Link to='/contact' className='h-9 w-full md:h-9 md:w-25 hover:bg-[#eb5e28]  flex justify-center items-center text-[0.9rem] md:text-[0.9rem] lg:text-[1.05rem] md:text-base text-center  rounded-sm  font-semibold bg-transparent border-2 border-[#eb5e28] shadow-lg shadow-[#eb5e28]/40 ' >Hire Me</Link>
            <button onClick={handleDownload}  className='h-9 cursor-pointer w-full md:h-9 md:w-25  flex justify-center items-center text-[0.9rem] md:text-[0.9rem] lg:text-[1.05rem] md:text-base text-center  rounded-sm  font-semibold text-amber-50 bg-[#eb5e28] shadow-lg shadow-[#eb5e28]/50'>Resume  <img src={download} alt="download" className="h-5 w-5 mb-1  ml-1" /></button>
          </div>

        </div>
        <div className="animate-slide-left  hidden md:block col-span-3 my-auto md:w-[55vw] lg:w-auto  mx-auto heroImage">
           <img src={heroImage} alt="hero_img" className="animate-floatY md:w-full lg:w-full lg:max-w-[600px] lg:h-auto lg:object-cover md:contain  m-0" />
        </div>
     </div>
  </>)
}