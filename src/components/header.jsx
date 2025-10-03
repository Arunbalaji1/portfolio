import  { useEffect, useState } from "react";

export function DarkModeToggle(){
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
      className="mt-0.3  ml-2 py-1 px-5 rounded-sm bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );

}
export default function Header(){ 
  console.log(typeof window)
 
  return(<>

   
    
    <nav className="flex justify-around items-center shadow-md dark:shadow-[#d0ad96e7]  bg-white  dark:bg-gray-600 mx-auto mt-5  rounded-sm h-11 w-16/18 xl:w-5xl  pl-5  pr-1 shrink font-semibold" >
        <div className="logo  ">&lt;AB/&gt;</div>
        <ul className="flex justify-around items-center grow-1 px-30 ">
          <li className=""><a href="#about">About Me</a></li>
          <li className=" "><a href="#skills">Skills</a></li>
          <li className=" "><a href="#projects">Projects</a></li>
          <li className=" "><a href="#contact">Feats</a></li>
          <li className=" "><a href="#contact">Contact</a></li>
        </ul>
        <button className ="mt-0.3 py-1 px-5 rounded-sm  ">Resume</button>
        <DarkModeToggle/>
    </nav>

     
    
    
   


  </>)
}