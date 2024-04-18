import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase"; // Import your auth instance
import {
  UserState,
  setAccessToken,
  setIsAuthenticated,
  setUser,
} from "../slices/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

interface User {
  uid: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
}
const authenticateUser = async (
  result: UserCredential,
  accessToken: string
) => {
  try {
    const email = result.user.email;
    const userDetails = {
      name: result.user.displayName,
      email: email,
      mobileNumber: result.user.phoneNumber,
      completedCourses: {},
      completedQuestions: {},
      githubProfile: "",
    };
    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/userAuthentication`,
      userDetails,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(user);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};
const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result: any = await signInWithPopup(auth, provider);
      const accessToken = result.user.accessToken;
      const user = await authenticateUser(result, accessToken);
      console.log(user);
      dispatch(setIsAuthenticated(true));
      dispatch(setAccessToken(accessToken));
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display an error message to the user)
    }
  };

  return (
    <button
      className="border-2 border-white pl-10 pr-10 pt-2 pb-2 rounded-3xl flex items-center space-x-2 hover:text-white"
      onClick={handleGoogleSignIn}
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
  );
};

const GithubSignIn = () => {
  const dispatch = useDispatch();
  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result: any = await signInWithPopup(auth, provider);
      const accessToken = result.user.accessToken;
      const user = await authenticateUser(result, accessToken);
      console.log(user);
      dispatch(setIsAuthenticated(true));
      dispatch(setAccessToken(accessToken));
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <button
      className="border-2 border-white pl-10 pr-10 pt-2 pb-2 rounded-3xl flex items-center space-x-2 ml-2 hover:text-white"
      onClick={handleGithubSignIn}
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
  );
};

export { GoogleSignIn, GithubSignIn };
