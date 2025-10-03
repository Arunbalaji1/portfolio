import Navbar from "./navbar";
import dart from "../assets/dart.png"
import figma from "../assets/certificates/figma.jpg"
import sql from "../assets/certificates/sql.jpg"
import python from "../assets/certificates/python.jpg"
import react from "../assets/certificates/react.jpg"



export function CardItem({ image, text, link }){
  return (
    <div className="col-span-1 transition duration-300 hover:border-black dark:hover:border-amber-100 p-3 mx-auto h-[90vw] w-[90vw] md:h-70 md:w-85 border-2 border-[#eb5e28] rounded-lg dark:bg-white/10 bg-black/30 hover:bg-[#f3703c] backdrop-blur-[0px] z-1">
      <a href={link} target="_blank">
        <div className="h-[80%] w-full mb-2 ">
        <img src={image} alt="Card visual" className=" w-full h-full object-cover rounded-md " />
      </div>
      <hr />
      <p className="py-3 md:py-4 font-semibold">{text}</p>
      </a>
    </div>
  );
};





export default function Feat(){
  return (
    <div>
      <Navbar/>
      <div className="absolute  md:top-70 top-[45%] left-[calc(50%-22.5vw)] md:left-[calc(50%-7.5vw)] ">
        <img src={dart} alt="dart_board_img" className="h-[45vw] w-[45vw]   md:h-[15vw] md:w-[15vw]  -z-3" />
      </div>
      <div className="absolute   top-40 left-10 ">
        <div className="text-black/50 dark:text-white/50 text-6xl font-extrabold md:font-extrabold md:text-9xl font-sans  ">Scroll</div>
      </div>
      <div className="absolute  bottom-25 right-12 ">
        <div className="text-black/50  dark:text-white/50 text-6xl font-extrabold md:font-extrabold md:text-9xl font-sans ">Down</div>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30   gap-x-0 h-[80vh] place-items-center scroll-smooth overflow-y-auto p-4 mt-8 hide-scrollbar relative">
        
        <CardItem 
        image="https://picsum.photos/600/360"
        text="Python programming"
        link="https://www.google.com"
        />
        <CardItem 
        image={react}
        text="React JS"
        link="https://www.udemy.com/certificate/UC-765aa2ea-61c0-49f0-b3df-06821bf79a18/"
        />

        
        
         <CardItem 
        image="https://picsum.photos/600/360"
        text="Python programming"
        link="https://www.google.com"
        />
         <CardItem 
        image={sql}
        text="Sql Database"
        link="https://www.udemy.com/certificate/UC-42a7108b-7431-458d-ad00-6d53437973e4/"
        />
         
        <CardItem 
        image={python}
        text="Python programming"
        link="https://www.udemy.com/certificate/UC-869adf7a-ce13-48ac-b584-fbaac27324ea/"
        />
         <CardItem 
        image="https://picsum.photos/600/360"
        text="Python programming"
        link="https://www.google.com"
        />
        <CardItem 
        image={figma}
        text="Figma Design course"
        link="https://www.udemy.com/certificate/UC-031edc90-8e26-43aa-af16-282f0fe413c3/"
        />
        
        
      </div>
     
    </div>
  )
}

