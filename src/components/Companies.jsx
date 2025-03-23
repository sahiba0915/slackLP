import React from "react";
import googleLogo from "../assets/googlelogo.png";

const Companies = () => {
    return (
            <div className="flex flex-row gap-8 justify-between px-4 mt-8">
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
                <img src={googleLogo} alt="Google" className="h-10 w-auto" />
            </div>
    );
};

export default Companies;
