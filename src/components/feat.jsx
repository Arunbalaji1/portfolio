import Navbar from "./navbar";
import dart from "../assets/dart.webp"
import figma from "../assets/certificates/figma.webp"
import sql from "../assets/certificates/sql.webp"
import python from "../assets/certificates/python.webp"
import react from "../assets/certificates/react.webp"
import ski from "../assets/certificates/ski.webp"
import verbalcommunication from "../assets/certificates/verbalcommunication.webp"
import Maths_competition from "../assets/certificates/Maths_competition.webp"
import Python_quiz from "../assets/certificates/Python_quiz.webp"
import SQL_workshop from "../assets/certificates/SQL_workshop.webp"


export function CardItem({ image, text, link }){
  return (
    <div className="animate-fade-in col-span-1 transition duration-300 md:hover:border-black md:dark:hover:border-amber-100 p-3 mx-auto h-[90vw] w-[90vw] md:h-70 md:w-85 border-2 md:border-[#eb5e28] rounded-lg md:dark:bg-white/10 md:bg-black/30 bg-[#eb5e28]/50 md:hover:bg-[#f3703c] backdrop-blur-[2px] md:backdrop-blur-[0px] z-1">
      <a href={link} target="_blank">
        <div className="h-[80%] w-full mb-2 ">
        <img src={image} alt="Card visual" className=" w-full h-full object-cover rounded-md " />
      </div>
      <hr className="m-0 h-[2%] " />
      <div className="flex p-auto items-center h-[18%] font-semibold ">{text}</div>
      </a>
    </div>
  );
};





export default function Feat(){
  return (
    <div>
      <Navbar current={"feats"} />
      <div className="absolute  md:top-70 top-[45%] left-[calc(50%-22.5vw)] md:left-[calc(50%-7.5vw)] ">
        <img src={dart} alt="dart_board_img" className=" animate-floatY  h-[45vw] w-[45vw]   md:h-[15vw] md:w-[15vw]  -z-3" />
      </div>
      <div className="absolute   top-40 left-10 ">
        <div className="text-black/50 dark:text-white/50 text-6xl font-extrabold md:font-extrabold md:text-9xl font-sans  ">Scroll</div>
      </div>
      <div className="absolute  bottom-25 right-12 ">
        <div className="text-black/50  dark:text-white/50 text-6xl font-extrabold md:font-extrabold md:text-9xl font-sans ">Down</div>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30   gap-x-0 h-[80vh] place-items-center scroll-smooth overflow-y-auto p-4 mt-8 hide-scrollbar relative">
        
        <div className="md:hidden col-span-1r  mx-auto h-[10vw] w-[90vw]  ">
      
       </div>
        <CardItem 
        image={ski}
        text="Completed a Web Development Internship at Sri Kalaivani Industries."
        link="https://drive.google.com/file/d/1REZm-VUDAGA82KKEnN_9FKkMcGMascSW/view?usp=drive_link"
        />
        <CardItem 
        image={react}
        text="React JS at Udemy"
        link="https://www.udemy.com/certificate/UC-765aa2ea-61c0-49f0-b3df-06821bf79a18/"
        />

         <CardItem 
        image={SQL_workshop}
        text="SQL Workshop"
        link="https://drive.google.com/file/d/1wNmX934K24eY23mZlYqYLQ93n_mo-RT-/view?usp=sharing"
        />
         <CardItem 
        image={sql}
        text="SQL Database at Udemy"
        link="https://www.udemy.com/certificate/UC-42a7108b-7431-458d-ad00-6d53437973e4/"
        />
         
        <CardItem 
        image={python}
        text="Python programming at Udemy"
        link="https://www.udemy.com/certificate/UC-869adf7a-ce13-48ac-b584-fbaac27324ea/"
        />
         <CardItem 
        image={Python_quiz}
        text="Python Quiz Competition"
        link="https://drive.google.com/file/d/19XX9RpTzPYRz8mlvKmqoiCQwt5x7VcX4/view?usp=sharing"
        />
        <CardItem 
        image={figma}
        text="Figma Design course at Udemy"
        link="https://www.udemy.com/certificate/UC-031edc90-8e26-43aa-af16-282f0fe413c3/"
        />
        
        <CardItem 
        image={verbalcommunication}
        text="Microsoft Communication Training "
        link="https://drive.google.com/file/d/1QWh4xG518fFee3zQ3x4yinM7KPph0KN6/view?usp=sharing"
        />
        <CardItem 
        image={Maths_competition}
        text="Maths Quiz Competition"
        link="https://drive.google.com/file/d/19a3dUD0ZnbXsheDXJAq9yvZ6VLA6UOcu/view?usp=sharing"
        />
        
      </div>
     
    </div>
  )
}

