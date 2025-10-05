
import Navbar from './navbar';
import vortexfitness from '../assets/projects/vortex.png';
import rps from '../assets/projects/rps.png'
import LTS from '../assets/projects/LTS.png'
import portfolio from '../assets/projects/portfolio.png'
import selenium_ecommerce from '../assets/projects/selenium_ecommerce.png'
import bing_scraper from '../assets/projects/bing_scraper.png'
import rocket from '../assets/rocket.png'
import githublogo from '../assets/github-50.png'
import globe from '../assets/globe-50.png'

import { useState } from "react";


export function ProjectCard({ title, description, techStack, image, github, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-80 h-90  md:w-70 md:h-80 [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 ring-3 ring-[#eb5e28]/80 flex flex-col justify-center items-center bg-white dark:bg-[#203c56]  rounded-tr-[45px] rounded-bl-[45px] shadow-xl shadow-[#eb5e28]/60 p-5 [backface-visibility:hidden]">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            {description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 ring-3 ring-[#eb5e28]/80 bg-white dark:bg-[#203c56]  rounded-tl-[45px] rounded-br-[45px]    shadow-xl shadow-[#eb5e28]/60 p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className='flex flex-col justify-between items-start  h-full  w-full   backdrop-blur-3xl rounded-tl-[36px] rounded-br-[45px]'>
              <img
                src={image}
                alt={`${title} preview`}
                className="w-full h-[50%]   rounded-tl-[36px] "
              />
              <hr className='mb-0' />

              <div className="flex flex-wrap gap-2 justify-start  overflow-y-auto">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between  items-center w-full  mt-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full items-center text-sm font-medium text-white text-center bg-gray-800/90 hover:bg-gray-900 transition-colors"
                >
                  <img src={githublogo} alt="github" className='mx-auto my-1 h-8  w-8'/>
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full items-center text-sm font-medium text-white text-center rounded-br-[36px] bg-[#f3662e]/90  hover:bg-[#eb5e28] transition-colors"
                >
                  <img src={globe} alt="website" className='mx-auto my-1 h-8  w-8'/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Projects () {
  

  return (<div>
    <Navbar current={"projects"} />
    
    <section id="projects" className="flex flex-col justify-around h-[90vh]   " >
      
      <div className="flex overflow-x-auto space-x-4 p-4 scroll-smooth rounded-xl hide-scrollbar ">
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <div className='w-60 h-70  flex flex-col justify-center items-center  '>
            <img src={rocket} alt="" className='-rotate-50 h-50 w-50' />
            <div className='text-[#eb5e28] text-4xl font-extrabold font-sans'>SWIPE</div>
          </div>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="Vortex Fitness" description="A sleek fitness landing page with responsive design and smooth animations." techStack={['HTML', 'CSS','Bootstrap','Javascript']} image={vortexfitness} github="https://github.com/Arunbalaji1/Vortex-Fittness-Project" link="https://arunbalaji-vortexfitness.web.app/"/>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="Bing Job Scraper" description="Bing Job Scraper is a Python tool that uses Selenium to fetch job listings from Bing and saves them in a files." techStack={['Python', 'Selenium', 'Pytest']} image={bing_scraper} github="https://github.com/Arunbalaji1/job-automation-suite" link="https://github.com/Arunbalaji1/job-automation-suite"/>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="Rock Paper Scissor" description="Rock Paper Scissor is a web game where you compete against the computer." techStack={['HTML','CSS',  'Javascript','Netlify']} image={rps} github="https://github.com/Arunbalaji1/rock-papper-scissor" link="https://arunbalaji-rpsgame.netlify.app/"/>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="Portfolio" description="Portfolio is a modern, responsive website built with React to showcase my projects, skills, and experience." techStack={['React','Tailwind','Firebase']} image={portfolio} github="https://github.com/Arunbalaji1/portfolio" link="https://arunbalajideveloper.web.app/"/>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="Ecomerse automation" description="Automated e-commerce user flows (login, search, cart, checkout) using Python and Selenium." techStack={['Python', 'Selenium', 'Pytest']} image={selenium_ecommerce} github="https://github.com/Arunbalaji1/SeleniumEcommerceProject" link="https://github.com/Arunbalaji1/SeleniumEcommerceProject"/>
        </div>
        <div className="min-w-[400px] h-fit p-5 flex items-center justify-center rounded-lg">
          <ProjectCard title="L T S" description="A responsive restaurant website built with HTML and CSS, representing my first  web development project." techStack={['HTML', 'CSS', 'Javascript', 'Netlify']} image={LTS} github="https://littletaccoshop.netlify.app/" link="https://littletaccoshop.netlify.app/"/>
        </div>
      </div>
    </section>
    </div>
  );
};

