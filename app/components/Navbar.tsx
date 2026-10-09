"use client"
import PriceTicker from "./Marque"
import logo from "@/logo-icon.png"
import Image from 'next/image';
import { useState, useEffect } from "react";
import Categories from "./Categories";
const Navbar = () => {
    const [date, setDate] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDate(
        new Date().toLocaleDateString("bn-BD", {
          dateStyle: "full",
        })
      );
    });

    return () => cancelAnimationFrame(frame);
  }, []);


    return (
        <div className="px-4 sm:px-6 lg:px-10 mt-2">
            <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400 sm:h-12 sm:w-12">
 <Image src={logo} alt="Company Logo"  className="h-7 w-7 object-contain sm:h-8 sm:w-8"/>
        </div>
        <div className="flex-col gap-0.5">
            <h3><span className="font-semibold">বাজার দর</span></h3>
            <span className="text-xs text-gray-500 sm:text-sm">{date}</span>

        </div> 
       
         </div> 
         <div>Button 1</div>
         
         
         </div>
         
         
        <div> <Categories/></div>
        <PriceTicker/>
            </div>
       
    );
};

export default Navbar;