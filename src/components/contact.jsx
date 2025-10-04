import { useState } from "react";
import Navbar from "./navbar";
import Tooltip from '@mui/material/Tooltip';

import contact_img from "../assets/contact.png"
import mail_img from "../assets/ssicon/mail.png"
import phone_img from "../assets/ssicon/phone.png"
import github_img from "../assets/ssicon/github.png"
import linkedin_img from "../assets/ssicon/linkedin.png"


//Form componenet
export  function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
 

  const scriptURL = "https://script.google.com/macros/s/AKfycbwooxFTrHZY1fdJ9MRADES6Cr9IwKiC0l4Xs-AkWN5fxO2g8WC8Lan5JS6APjH8-Zz5JA/exec"; // replace with your Apps Script URL

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    setLoading(true);
    

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        alert("✅ Message sent successfully!")
      } else {
        
        alert("❌ Failed to send. Try again.")
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong.")
    }

    setLoading(false);
  };

  return (
   
    <div className="form w-full h-fit mt-47 mb-5 md:m-auto p-5 
     border-t-1 border-[#eb5e28]/60 md:border-0 text-[0.9rem] md:text-[1rem] z-1 rounded-2xl bg-[#fff8db] md:bg-amber-100/50 dark:bg-[#14202b] text-black  dark:text-white/90   shadow-lg shadow-[#eb5e28] ">
       <div className="flex md:hidden flex-row mb-3 justify-between items-center  bg-[#eb5e28]/20 rounded-md backdrop-blur-xs overflow-hidden">
                 <div className=" h-[10vw] w-[10vw]   mx-2 my-2 ">
                     <Tooltip title="arunbalajimanickam@gmail.com">
                        <a target="_blank" href="mailto:arunbalajimanickam@gmail.com"><img src={mail_img} alt="mail_img" /></a>
                     </Tooltip>
                 </div>
                 <div className=" h-[10vw] w-[10vw]   mx-2 my-2 ">
                    <Tooltip title="+91 8838477434">
                       <a target="_blank" href="tel:+91 8838477434"><img src={phone_img} alt="phone_img" /></a>
                    </Tooltip>
                 </div>
                 <div className=" h-[10vw] w-[10vw]   mx-2 my-2 ">
                     <Tooltip title="linkedin/arunbalaji2003">
                       <a target="_blank" href="https://www.linkedin.com/in/arunbalaji2003/"><img src={linkedin_img} alt="linkedin_img" /></a>
                     </Tooltip>
                 </div>
                 <div className=" h-[10vw] w-[10vw]   mx-2 my-2 ">
                     <Tooltip title="github/Arunbalaji1">
                       <a target="_blank" href="https://github.com/Arunbalaji1" ><img src={github_img} alt="github_img" /></a>
                     </Tooltip>
                 </div>
               </div>
      <form onSubmit={handleSubmit}>
        <label className="font-semibold " htmlFor="name">Name:</label>
        <br />
        <input
          className=" bg-white dark:bg-white/30 rounded-md p-2 w-full  mb-2 dark:focus:outline-[#eb5e28]/90 dark:focus:outline-2 outline-[#eb5e28]/50  "
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <label className="font-semibold " htmlFor="email">Email:</label>
        <br />
        <input
          className="bg-white dark:bg-white/30 rounded-md p-2 w-full  mb-2 dark:focus:outline-[#eb5e28]/90 dark:focus:outline-2 outline-[#eb5e28]/50"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <label className="font-semibold " htmlFor="message">Message:</label>
        <br />
        <textarea
          className="bg-white dark:bg-white/30 rounded-md p-2 w-full h-30 mb-2 dark:focus:outline-[#eb5e28]/90 dark:focus:outline-2 outline-[#eb5e28]/50"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <br />
        
          <button className="bg-[#eb6733]  hover:bg-[#ef5417] py-1 px-3 rounded-sm w-full    md:text-[0.9rem] lg:text-[1rem] md:text-base font-semibold sm:mr-1.5" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Send"}
          </button>
         
       
      </form>

     
    </div>
  );
}

export default function Contact(){
  return(
       <div>
        <Navbar/>
        <div className="grid grid-cols-4 h-[75vh] md:pl-5 p-5  rounded-2xl mt-3 md:mt-10 md:mx-[5vw] lg:mx-[10vw] xl:mx-[15vw] md:bg-amber-50 dark:md:bg-[#203c56] md:shadow-2xl   dark:md:border-1  dark:md:border-[#6b2d14b1]">
          <div className="col-span-4  md:col-span-2 md:pl-5  flex justify-center items-center relative">
            <div className="md:hidden absolute top-0">
              <img src={contact_img} alt="" className="h-60" />
            </div>
            <Form/>
          </div>
         
          <div className="hidden md:col-span-2  bg-cover bg-center md:flex flex-col justify-end items-center " style={{ backgroundImage: `url(${contact_img})` }}>
               <div className="flex flex-row  ml-0 justify-between items-center  bg-[#eb5e28]/20 rounded-t-xl backdrop-blur-xs overflow-hidden">
                 <div className=" h-[5vh] w-[5vw]  mb-15 mx-2 mt-2 over rounded-md">
                     <Tooltip title="arunbalajimanickam@gmail.com">
                        <a target="_blank" href="mailto:arunbalajimanickam@gmail.com"><img src={mail_img} alt="mail_img" /></a>
                     </Tooltip>
                 </div>
                 <div className=" h-[5vh] w-[5vw]  mb-15 mx-2 mt-2 over rounded-md">
                    <Tooltip title="+91 8838477434">
                       <a target="_blank" href="tel:+91 8838477434"><img src={phone_img} alt="phone_img" /></a>
                    </Tooltip>
                 </div>
                 <div className=" h-[5vh] w-[5vw]  mb-15 mx-2 mt-2 over rounded-md">
                     <Tooltip title="linkedin/arunbalaji2003">
                       <a target="_blank" href="https://www.linkedin.com/in/arunbalaji2003/"><img src={linkedin_img} alt="linkedin_img" /></a>
                     </Tooltip>
                 </div>
                 <div className=" h-[5vh] w-[5vw]  mb-15 mx-2 mt-2 over rounded-md">
                     <Tooltip title="github/Arunbalaji1">
                       <a target="_blank" href="https://github.com/Arunbalaji1" ><img src={github_img} alt="github_img" /></a>
                     </Tooltip>
                 </div>
               </div>
          </div>
        </div>
       
       </div>
  )
}

