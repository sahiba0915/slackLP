import React from "react";
import heroLogo from "../assets/herologo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    return (
        <div>
        <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row items-center">
            <div className="pr-4">
            <img src={heroLogo} alt="Hero Logo" className="h-10 w-auto cursor-pointer" />
            </div>
            <ul className="flex flex-row gap-2 font-semibold cursor-pointer">
                <li className="flex flex-row gap-1 items-center">Products<IoIosArrowDown /></li>
                <li>Enterprise</li>
                <li>Resource</li>
                <li>Pricing</li>
            </ul>
            </div>
            <div className="flex flex-row items-center font-semibold cursor-pointer">
                <ul className="flex flex-row gap-2">
                <li className="flex flex-row items-center"><div><FiSearch/></div></li>
                <li><div className="px-4 py-2">Sign In</div></li>
                <li><button className="border-2 border-[#4A154B] text-[#4A154B] px-4 py-2 rounded-md cursor-pointer">TALK TO SALES</button></li>
                <li><button className="border-2 bg-[#4A154B] px-4 py-2 rounded-md text-white cursor-pointer">TRY FOR FREE</button></li>
                </ul>
            </div>
        </div>
        <div className="border bg-[#296D98] rounded-full text-white mt-6 font-semibold flex justify-between items-center px-6 py-6">
            <p>
                Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. 
                <span className="font-bold inline-flex items-center ml-2">
                Let's go <GoArrowRight className="ml-1"/>
                </span>
            </p>
            <RxCross2 className="cursor-pointer"/>
        </div>
        </div>
    )
} 

export default Navbar