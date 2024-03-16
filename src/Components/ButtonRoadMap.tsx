import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ButtonProps {
  label: string;
  bookmarked: boolean;
  showBookmark: boolean;
  dotIcon: boolean;
  routeTo: string;
}

const ButtonRoadMap: React.FC<ButtonProps> = ({
  label,
  bookmarked,
  dotIcon,
  showBookmark,
  routeTo,
}) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <button
        onClick={() => {
          navigate(`/topic/${routeTo}`);
        }}
        className="relative bg-headerBgTop border-slate-800 border-[1.5px] hover:border-white text-slate-400 py-3 sm:py-5 text-left pl-3 text-lg sm:text-xl font-normal rounded-lg lg:w-[350px] sm:w-[99%] w-full"
      >
        {label}

        {!bookmarked && showBookmark && (
          <button onClick={() => console.log("hi")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-bookmark absolute top-0 right-0 text-slate-400 m-2"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
        )}

        {bookmarked && showBookmark && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bookmark-check absolute top-0 right-0 text-slate-400 m-2"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
            <path d="m9 10 2 2 4-4" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ButtonRoadMap;
