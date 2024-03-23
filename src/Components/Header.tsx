import React, { useState, useEffect } from "react";
import logo from "../Images/logo.jpg";
import { AlignJustify, X } from "lucide-react";
import { Link } from "react-router-dom";
import OverlayButton from "./OverlayButton";

const Header = () => {

  const buttonData = [
      {
        title:"Roadmaps",
        subtitle:"Step by step learning paths"
      },
      {
        title:"Best Practices",
        subtitle:"Do's and don'ts"
      },
      {
        title:"Questions",
        subtitle:"Test and Practice your knowledge"
      },
      {
        title:"Guides",
        subtitle:"In-depth articles and tutorials"
      },
      {
        title:"Videos",
        subtitle:"Animated and interactive content"
      },   
  ]


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
    
    setShowDiv(!showDiv);
  };

  

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  
  const handleAlignJustifyHover = () => {
    setIsOverlayOpen(true);
  };

  const handleAlignJustifyLeave = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className=" text-white pt-5 pb-5 flex justify-between align-middle px-4 md:px-[14%] w-[100vw] bg-headerBgTop">
      <div>
        <ul className="flex space-x-8 items-center text-xl font-normal text-slate-300 text-center">
          <li className="hover:text-white">
            <Link to="/"><img src={logo} className="rounded-md"></img></Link>
          </li>
          {windowSize.width > 600 && (
            <>
              <li className="hover:text-white" onMouseEnter={handleAlignJustifyHover}
                >
                <AlignJustify />
              </li>
              <li className="hover:text-white"><Link to="/start">Start Here</Link></li>
              <li className="hover:text-white"><button>Teams</button></li>
            </>
          )}
          <li className="hover:text-white text-blue-300">We're Hiring</li>
        </ul>
      </div>

      {isOverlayOpen && (
        <div  onMouseEnter={handleAlignJustifyHover} onMouseLeave={handleAlignJustifyLeave} className={`absolute top-[70px] w-[350px] left-[18%] bg-alignJustifyOverlayBg rounded-lg py-4 z-50`}>
          <ul>
              {buttonData.map((s,idx)=>{
                return (<li><Link to="/"><OverlayButton title={s.title} subtitle={s.subtitle} key={idx}/></Link></li>)
              })}
          </ul>
        </div>
      )}

      <div>
        {windowSize.width > 600 ? (
          <ul className="flex space-x-8 items-center text-xl font-normal text-slate-300">
            {/* <li className="hover:text-white"><button>Login</button></li>
            <li>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 pl-10 pr-10 pt-2 pb-2 rounded-3xl">
                Sign Up
              </button>
            </li> */}
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
