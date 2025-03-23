import React from "react";
import googleLogo from "../assets/googlelogo.png";

const HeroSection = () => {
    return (
        <div className="flex flex-row justify-center items-center px-5 mt-6">

            <div className="flex flex-col justify-between mt-4 gap-4 w-1/2">
                <div className="font-bold text-6xl">Slack is where the future works</div>
                <p className="font-semibold">Transform the way you work with one place for<br/> everyone and everything you need to get stuff done.</p>
                <div className="flex flex-row gap-2 font-semibold text-md">
                    <button className="border-2 bg-[#4A154B] px-8 py-4 rounded-md text-white cursor-pointer">TRY FOR FREE</button>
                    <button className="flex flex-row items-center gap-2 border-2 bg-[#0096FF] px-1 py-1 rounded-md text-white cursor-pointer">
                        <div className="bg-white px-2 py-2 cursor-pointer">
                            <img src={googleLogo} alt="Google Logo" className="h-5 w-5" />
                        </div>
                        SIGN UP WITH GOOGLE
                    </button>
                </div>        
            </div>

            <div className="w-1/2">
                <img src="https://i0.wp.com/cover3marketing.com/wp-content/uploads/2021/08/Slack.png?fit=860%2C574&ssl=1" className="w-full h-auto"/>
            </div>

        </div>
    );
};

export default HeroSection;
