import Navbar from "./navbar";
import profile from '../assets/profile.png'

export default function AboutMe() {
  return (
    <div>
      <Navbar current={"About"} />
      <section className="about  flex  md:justify-center md:items-center h-fit w-full p-5 md:w-auto">
        <div className="w-full md:w-fit  h-fit mt-10 md:mt-23   ring-2 ring-[#eb5e28]   rounded-2xl flex flex-col  md:flex-row bg-white/20 backdrop-blur-xs justify-around items-center">
          {/* Left image box */}
          <div className="animate-slide-rightcor">
            <img
              src={profile}// Replace with your photo
              alt="Arun Profile"
              className=" animate-floatmild shadow-[#eb5e28] m-4  md:ml-10 rounded-full shadow-lg border-1 border-[#eb5e28]/50 md:rounded-full w-[40vw] h-[40vw]   md:w-[40vh] md:h-[40vh] object-cover "
            />
          </div>
          {/* Right content box  */}
          <div className="animate-slide-leftcor indent-18 text-justify text-[3.8vw] sm:text-[1.9vw] md:text-[1.8vw] lg:text-[1.5vw]  xl:text-[1.3vw]  md:m-3   px-4 pb-4 md:p-4 rounded-md w-full md:w-[50vw] h-fit font-semibold    italic  text-black dark:text-white/80">
              <p>
                 I am Arun Balaji, an aspiring software developer with a strong foundation in web development, automation, and problem-solving using Python and JavaScript. Currently pursuing my B.E. in Mechanical Engineering at Government College of Engineering, Erode (IRTT), I actively work on projects that blend creativity with technology, from building responsive websites and interactive applications to automating workflows with Python and Selenium.
             </p>
             <br />
              <p>
                 Beyond technical skills, I bring a team-oriented mindset, adaptability, and strong analytical problem-solving abilities. I am passionate about web development, machine learning, automation, and data analytics and eager to contribute to innovative projects that create real-world impact.
             </p>
          </div>
        </div>

      </section>
    
    </div>
  );
}
