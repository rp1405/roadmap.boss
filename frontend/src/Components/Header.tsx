import React, { useState, useEffect } from "react";
import logo from "../Images/logo.jpg";
import { AlignJustify, X } from "lucide-react";
import { Link, Route, useNavigate } from "react-router-dom";
import OverlayButton from "./OverlayButton";
import axios from "axios";
import { extractUserDetails } from "../utils/githubUserDetailExtractor";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setIsAuthenticated,
  UserState,
  initialState,
} from "../slices/userSlice";
import { GithubSignIn, GoogleSignIn } from "../Authentication/AllLogins";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state: UserState) => state);
  const buttonresponse = [
    {
      title: "Roadmaps",
      subtitle: "Step by step learning paths",
    },
    {
      title: "Best Practices",
      subtitle: "Do's and don'ts",
    },
    {
      title: "Questions",
      subtitle: "Test and Practice your knowledge",
    },
    {
      title: "Guides",
      subtitle: "In-depth articles and tutorials",
    },
    {
      title: "Videos",
      subtitle: "Animated and interactive content",
    },
  ];

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
            <Link to="/">
              <img src={logo} className="rounded-md"></img>
            </Link>
          </li>
          {windowSize.width > 600 && (
            <>
              <li
                className="hover:text-white"
                onMouseEnter={handleAlignJustifyHover}
              >
                <AlignJustify />
              </li>
              <li className="hover:text-white">
                <Link to="/start">Start Here</Link>
              </li>
              <li className="hover:text-white">
                <button>Teams</button>
              </li>
            </>
          )}
          <li className="hover:text-white text-blue-300">We're Hiring</li>
        </ul>
      </div>

      {isOverlayOpen && (
        <div
          onMouseEnter={handleAlignJustifyHover}
          onMouseLeave={handleAlignJustifyLeave}
          className={`absolute top-[70px] w-[350px] left-[18%] bg-alignJustifyOverlayBg rounded-lg py-4 z-50`}
        >
          <ul>
            {buttonresponse.map((s, idx) => {
              return (
                <li>
                  <Link to="/">
                    <OverlayButton
                      title={s.title}
                      subtitle={s.subtitle}
                      key={idx}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div>
        {windowSize.width > 600 ? (
          <>
            {user?.isAuthenticated == false ? (
              <div className="flex flex-row space-x-8 items-center text-xl font-normal text-slate-300">
                <div className=" flex flex-row">
                  <GoogleSignIn />
                  <GithubSignIn />
                </div>

                {/* <li>
              <button
                onClick={() => alert("Coming Soon")}
                className="bg-gradient-to-r from-blue-500 to-blue-700 pl-10 pr-10 pt-2 pb-2 rounded-3xl"
              >
                Sign Up
              </button>
            </li> */}
              </div>
            ) : (
              <div className="text-slate-300 text-xl  pt-1 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user hover:text-white hover:cursor-pointer"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h1>&nbsp;{user?.name}&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-log-out hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    try {
                      dispatch(setUser(initialState));
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              </div>
            )}
          </>
        ) : (
          <button onClick={handleButtonClick}>
            <AlignJustify className="mt-2" />
          </button>
        )}
      </div>
      {showDiv && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-headerBgTop flex justify-center items-center z-50 text-center">
            <ul className="text-lg ">
              <li
                className="absolute right-10 top-10 "
                onClick={handleButtonClick}
              >
                <X />
              </li>
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
