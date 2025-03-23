import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Message = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg px-6 py-6 rounded-lg w-96 border border-gray-300">
      {/* Close Icon Positioned at Top Right */}
      <div className="flex justify-end">
        <RxCross2 
          className="cursor-pointer text-gray-600 hover:text-black" 
          onClick={() => setIsVisible(false)} 
        />
      </div>
      
      <p className="text-sm font-semibold mb-6">
        This website uses cookies to enhance user experience and analyze
        performance and traffic. We also share information about your use of
        our site with social media, advertising, and analytics partners.{" "}
        <a href="#" className="text-blue-500 underline">
          More Info
        </a>
      </p>

      <div className="mt-3 flex flex-col gap-2 justify-between cursor-pointer">
        <button
          className="bg-[#4A154B] text-white px-3 py-1 rounded-md"
          onClick={() => setIsVisible(false)}
        >
          Accept All Cookies
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default Message;
