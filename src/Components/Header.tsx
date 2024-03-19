import React, { useState, useEffect } from "react";
import logo from "../Images/logo.jpg";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    console.log(windowSize.width);
    setWindowSize({
      width: window.screen.width,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    console.log("hi")
    setShowDiv(!showDiv);
  };

  return (
    <div className=" text-white pt-5 pb-5 flex justify-between align-middle px-4 md:px-[14%] w-[100vw] bg-headerBgTop">
      <div>
        <ul className="flex space-x-8 items-center text-xl font-normal text-slate-300 text-center">
          <li className="hover:text-white">
            <img src={logo} className="rounded-md"></img>
          </li>
          {windowSize.width > 600 && (
            <>
              <li className="hover:text-white">
                <AlignJustify />
              </li>
              <li className="hover:text-white">Start Here</li>
              <li className="hover:text-white">Teams</li>
            </>
          )}
          <li className="hover:text-white text-blue-300">We're Hiring</li>
        </ul>
      </div>

      <div>
        {windowSize.width > 600 ? (
          <ul className="flex space-x-8 items-center text-xl font-normal text-slate-300">
            <li className="hover:text-white">Login</li>
            <li>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 pl-10 pr-10 pt-2 pb-2 rounded-3xl">
                Sign Up
              </button>
            </li>
          </ul>
        ) : (
          <button onClick={handleButtonClick}><AlignJustify className="mt-2" /></button>
        )}
      </div>
      {showDiv && (

        <div>
          
          <div className="fixed top-0 left-0 w-full h-full bg-headerBgTop flex justify-center items-center z-50 text-center">
              <ul className="text-lg ">
                <li className="absolute right-10 top-10 " onClick={handleButtonClick}><X/></li>
                <li>Roadmaps</li>
                <li>Best Practices</li>
                <li>Guides</li>
                <li>Videos</li>
                <li>Login</li>
                <li className="text-green-500">Signup</li>
              </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
