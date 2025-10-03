import Navbar from "./navbar";
import profile from '../assets/profile.png'

export default function AboutMe() {
  return (
    <div>
      <Navbar/>
      <section className="about  flex  md:justify-center md:items-center h-[80vh] w-full p-5 md:w-auto">
        <div className="w-full md:w-fit gap-5 h-fit mt-10  p-3 shadow-2xl shadow-[#eb5e28]   rounded-2xl flex flex-col  md:flex-row bg-white/20 backdrop-blur-xs justify-around items-center">
          {/* Left image box */}
          <div className=" ">
            <img
              src={profile}// Replace with your photo
              alt="Arun Profile"
              className="shadow-[#eb5e28]  ml-6 rounded-md shadow-xl md:rounded-full w-[40vw] h-[40vw]   md:w-[40vh] md:h-[40vh] object-cover "
            />
          </div>
          {/* Right content box */}
          <div className=" indent-20 text-[3.5vw] sm:text-[1.9vw] md:text-[1.8vw] lg:text-[1.5vw]  xl:text-[1.3vw]  m-3   p-4 rounded-md w-full md:w-[50vw] h-fit font-semibold [word-spacing:0.3rem]   italic  text-black dark:text-white/80">
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
