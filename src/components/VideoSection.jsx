import React from "react";
import googleLogo from "../assets/googlelogo.png";

const VideoSection = () => {
    return (
        <div className="flex flex-row px-5 my-8 w-full gap-1">
            {/* Image Section */}
            <div className="w-1/2">
                <img 
                    src="https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=612x612&w=0&k=20&c=kj0PRQlgvWLzA1-1me6iZp5mlwsZhC4QlcvIEb1J1bs=" 
                    className="w-full h-auto" 
                    alt="Slack Banner"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between ml-12 space-y-1 w-1/2">
                <div className="font-bold text-2xl">Now is your moment to build a better tomorrow</div>
                <p className="font-semibold">
                    We've seen what the future can be. Now it's time to decide<br/> 
                    what it will be.
                </p>
                <button className="border-2 border-[#4A154B] text-[#4A154B] px-4 py-2 rounded-md cursor-pointer w-[50%]">
                    Watch Video
                </button>
            </div>
        </div>
    );
};

export default VideoSection;
