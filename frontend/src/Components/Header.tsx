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

  const fetchAuthUser = async () => {
    const response = await axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/v1/auth/user", {
        withCredentials: true,
      })
      .catch((err) => {
        console.log("Not properly authenticated");
        dispatch(setIsAuthenticated(false));
        // dispatch(setUser(null));
      });
    if (response && response.data) {
      console.log("User: ", response.data);
      dispatch(setIsAuthenticated(true));
      dispatch(setUser(response.data));
      console.log(user);
    }
  };

  const redirectToGoogleSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL =
      process.env.REACT_APP_BACKEND_URL + "/api/v1/login/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };
  const redirectToGithubSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL =
      process.env.REACT_APP_BACKEND_URL + "/api/v1/login/github";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
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
                  <button
                    className="border-2 border-white pl-10 pr-10 pt-2 pb-2 rounded-3xl flex items-center space-x-2 hover:text-white"
                    onClick={redirectToGoogleSSO}
                  >
                    Login with &nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    className="border-2 border-white pl-10 pr-10 pt-2 pb-2 rounded-3xl flex items-center space-x-2 ml-2 hover:text-white"
                    onClick={redirectToGithubSSO}
                  >
                    Login with &nbsp;
                    <span>
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
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </span>
                  </button>
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
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        `${process.env.REACT_APP_BACKEND_URL}/logout`,
                        { withCredentials: true }
                      );
                      dispatch(setUser(initialState));
                      console.log(res);
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
