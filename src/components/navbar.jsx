import { useEffect, useState,} from "react";
import { Link } from "react-router-dom";
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
import max from "../assets/fullscreen.svg"
import min from "../assets/fullscreenexit.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"


export  function FullScreenToggle() {
  const html_element = document.getElementById("fullScreen");
  const [isFull, setIsFull] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      html_element.requestFullscreen().then(() => setIsFull(true));
    } else {
      document.exitFullscreen().then(() => setIsFull(false));
    }
  };

  return (
    
      <button
        
        onClick={toggleFullScreen}
        className="p-2 mr-2 hover:cursor-pointer rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        
      >
        {isFull ? (
          //fullscreeenexit
          <img src={min} alt="minimize"  className="h-4 w-4" />
        ) : (
          //fullscreeen
          <img src={max} alt="maximize"  className="h-4 w-4" />
          
        )}
      </button>
    
  );
}

export function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("dark-mode") === "true"
      : false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <button
      className="p-2 mr-2 hover:cursor-pointer rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        // Sun icon for light mode
        <img src={sun} alt="sun_icon" className="h-4 w-4" />
        
      ) : (
        // Moon icon for dark mode
         <img src={moon} alt="moon_icon" className="h-4 w-4" />
      )}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`${isMenuOpen ? " bg-white/30 absolute top-3 right-2 left-2 ring-1 ring-[#eb5e28] dark:bg-[#203c56]/50 backdrop-blur-[10px]" : "bg-white  dark:bg-[#203c56]" } flex   md:text-[0.9rem] lg:text-[1rem] flex-wrap justify-between items-center shadow-md dark:ring-1 dark:ring-[#eb5e28] bg-white  dark:bg-[#203c56] mx-auto mt-0 md:mt-5 rounded-sm py-0 px-2 md:p-0 md:h-11 w-11/12 md:w-5/6 lg:w-4/5 xl:w-5xl   font-semibold z-50 `} >
        {/* Logo */}
        <Link to="/"  className="logo text-lg md:text-xl mx-2">&lt;AB/&gt;</Link>

        {/* Mobile controls - hamburger menu and dark mode toggle */}
        <div className="flex items-center md:hidden">
          <DarkModeToggle />
          
          
          <button
            className="p-2 hover:cursor-pointer rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
               <img src={close} alt="close" className="h-4" />
              ) : (
                <img src={menu} alt="menu" className="h-4" />
              )}
          </button>
        </div>

        {/* Navigation items - hidden on mobile when menu is closed */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center z-5  `}
        >
          <ul className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-3 lg:space-x-8 mt-4 md:mt-0 py-4 md:py-0">
            <li>
              <Link
                to="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-[rgb(235,94,40)] dark:hover:text-[rgb(235,94,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-gray-700 dark:text-gray-200 hover:text-[rgb(235,94,40)] dark:hover:text-[rgb(235,94,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-700 dark:text-gray-200 hover:text-[rgb(235,94,40)] dark:hover:text-[rgb(235,94,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/feats"
                className="text-gray-700 dark:text-gray-200 hover:text-[rgb(235,94,40)] dark:hover:text-[rgb(235,94,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Feats
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-[#eb5e28] dark:hover:text-[rgb(235,94,40)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side buttons - hidden on mobile when menu is closed */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-center space-x-3 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 pb-4 md:pb-0`}
        >
          <button className="py-1 px-3 rounded-sm hover:cursor-pointer  text-white text-sm md:text-[0.9rem] lg:text-[1rem] md:text-base  m-0 sm:mr-1.5">
            Resume
          </button>
          {/* Dark mode toggle for desktop */}
          <div className="hidden md:block">
            <DarkModeToggle />
            <FullScreenToggle/>
          </div>
        </div>
      </nav>
    </>
  );
}