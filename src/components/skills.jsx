
import bootstrapLogo from '../assets/skills_icons/Bootstrap.webp';
import css3Logo from '../assets/skills_icons/CSS3.webp';
import eclipseLogo from '../assets/skills_icons/Eclipse.webp';
import figmaLogo from '../assets/skills_icons/Figma.webp';
import gitLogo from '../assets/skills_icons/Git.webp';
import githubLogo from '../assets/skills_icons/GitHub.webp';
import mysqlLogo from '../assets/skills_icons/Mysql.webp';
import numpyLogo from '../assets/skills_icons/NumPy.webp';
import pycharmLogo from '../assets/skills_icons/PyCharm.webp';
import pythonLogo from '../assets/skills_icons/Python.webp';
import reactLogo from '../assets/skills_icons/React.webp';
import seleniumLogo from '../assets/skills_icons/Selenium.webp';
import tailwindLogo from '../assets/skills_icons/Tailwind.webp';
import vscodeLogo from '../assets/skills_icons/Vscode.webp';
import html5Logo from '../assets/skills_icons/HTML5.webp';
import javaLogo from '../assets/skills_icons/Java.webp';
import javascriptLogo from '../assets/skills_icons/JavaScript.webp';
import jupyterLogo from '../assets/skills_icons/Jupyter.webp';
import matplotlibLogo from '../assets/skills_icons/Matplotlib.webp';
import pandasLogo from '../assets/skills_icons/Pandas.webp';
import Navbar from "./navbar";

export  function ImgBox({logo,alt}){
    return(<div className="img_box animate-floatmild h-18 sm:h-10 md:h-15 lg:h-15 xl:h-18 2xl:h-20 w-18 sm:w-10 md:w-15 lg:w-15 xl:w-18 2xl:w-20 p-2 flex flex-col justify-center shadow-[inset_3px_3px_6px_0px_rgb(204,219,232),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)]  bg-white  dark:bg-[#203c56]   rounded-lg">
              <img src={logo}  alt={alt} className="m-auto"/>
              
          </div>)
}


export default function Skill(){
  return<>
   <Navbar current={"skills"} />
   
    

   <section className="   col-span-12 skills flex flex-col pt-5  pb-8 h-fit  items-center gap-4 mt-2">
    
    <div className="grid  grid-cols-7 animate-slide-right bg-gradient-to-b sm:bg-gradient-to-r from-[rgb(235,94,40)] via-[rgb(241,131,91)] to-[rgb(239,198,183)]  dark:via-[rgba(128,63,42,0.19)] dark:to-[#14202b] rounded-md p-1   m-2 sm:m-0 h-fit sm:h-[25vh] w-[80vw] sm:w-[90vw] ">
      <div className="sm:col-span-2 col-span-7 flex justify-center items-center">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-center mt-3 sm:mt-0">FrontEnd Technology</h2>
      </div>
      <div className="sm:col-span-5  col-span-7 flex flex-wrap  gap-10 sm:gap-3 justify-evenly m-5 sm:m-0 sm:justify-around items-center  "> 
          <ImgBox logo={html5Logo} alt="HTML5_Logo" />
          <ImgBox logo={css3Logo} alt="CSS3_Logo" />
          <ImgBox logo={bootstrapLogo} alt="Bootstrap_Logo" />
          <ImgBox logo={figmaLogo} alt="Figma_Logo" />
          <ImgBox logo={reactLogo} alt="React_Logo" />
          <ImgBox logo={tailwindLogo} alt="Tailwind_Logo" />

      </div>
    </div>
    <div className="grid  grid-cols-7 animate-slide-left bg-gradient-to-b sm:bg-gradient-to-l from-[rgb(235,94,40)] via-[rgb(241,131,91)] to-[rgb(239,198,183)]  dark:via-[rgba(128,63,42,0.19)] dark:to-[#14202b]   rounded-md p-1 sm:p-5   m-2 sm:m-0 h-fit sm:h-[25vh] w-[80vw] sm:w-[90vw]  ">
       <div className="block sm:hidden sm:col-span-2 col-span-7 p-0 justify-center items-center mt-5">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-center ">Backend & Programming</h2>
      </div>
      <div className="sm:col-span-5  col-span-7 flex flex-wrap  gap-10 sm:gap-3 justify-evenly m-5 sm:m-0 sm:justify-around items-center "> 
          <ImgBox logo={pythonLogo} alt="Python_Logo" />
          <ImgBox logo={javaLogo} alt="Java_Logo" />
          <ImgBox logo={javascriptLogo} alt="JavaScript_Logo" />
          <ImgBox logo={mysqlLogo} alt="MySQL_Logo" />
          <ImgBox logo={numpyLogo} alt="NumPy_Logo" />
          <ImgBox logo={seleniumLogo} alt="Selenium_Logo" />
          <ImgBox logo={matplotlibLogo} alt="Matplotlib_Logo" />
          <ImgBox logo={pandasLogo} alt="Pandas_Logo" />

      </div>
      <div className="sm:block hidden  sm:col-span-2 col-span-7 p-0 justify-center items-center mt-5">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-center ">Backend & Programming</h2>
      </div>
    </div>
    <div className="grid  grid-cols-7 animate-slide-right bg-gradient-to-b sm:bg-gradient-to-r from-[rgb(235,94,40)] via-[rgb(241,131,91)] to-[rgb(239,198,183)]   dark:via-[rgba(128,63,42,0.19)] dark:to-[#14202b] rounded-md p-1   m-2 sm:m-0 h-fit sm:h-[25vh] w-[80vw] sm:w-[90vw]  ">
      <div className="sm:col-span-2 col-span-7 flex justify-center items-center">
        <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-center mt-3 sm:mt-0">Development Tools</h2>
      </div>
      <div className="sm:col-span-5  col-span-7  flex flex-wrap  gap-10 sm:gap-3 justify-evenly m-5 sm:m-0 sm:justify-around items-center ">
          <ImgBox logo={vscodeLogo} alt="VSCode_Logo" />
          <ImgBox logo={eclipseLogo} alt="Eclipse_Logo" />
          <ImgBox logo={gitLogo} alt="Git_Logo" />
          <ImgBox logo={githubLogo} alt="GitHub_Logo" />
          <ImgBox logo={jupyterLogo} alt="Jupyter_Logo" />
          <ImgBox logo={pycharmLogo} alt="PyCharm_Logo" />

      </div>
      
    </div>
   </section> 
  
  </>
}