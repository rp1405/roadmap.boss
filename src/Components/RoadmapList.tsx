import React from "react";
import ButtonRoadMap from "./ButtonRoadMap";

interface Button {
  label: string;
  bookmarked: boolean;
  dotIcon: boolean;
  showBookmark: boolean;
  onClick: () => void;
  routeTo: string;
}

interface RoadmapListProps {
  heading: string;
  createYourRoadmap: boolean;
  buttons: Button[];
}

const RoadmapList: React.FC<RoadmapListProps> = (props) => {
  const { heading, buttons, createYourRoadmap } = props;

  return (
    <div className="pb-8 sm:pb-16 text-center ">
      <div className="flex items-center text-white border-solid pb-8 sm:pb-16 ">
        <hr className="flex-grow  border-slate-500" />
        <p className=" rounded-2xl border text-slate-400 border-slate-500 py-2 px-4 text-xl">
          {heading}
        </p>
        <hr className="flex-grow border-slate-500 text-slate-500" />
      </div>

      <div className="px-2 md:w-[1200px] lg:w-[1500px] md:mx-auto">
        <div className="px-2 lg:px-[14%]">
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:gap-2 md:gap-2 gap-2">
            {buttons.map((button, idx) => {
              return (
                <ButtonRoadMap
                  label={button.label}
                  bookmarked={button.bookmarked}
                  dotIcon={button.dotIcon}
                  key={idx}
                  showBookmark={button.showBookmark}
                  routeTo={button.routeTo}
                />
              );
            })}

            {createYourRoadmap && (
              <button className="border-slate-800 border-[1.5px] hover:border-white text-slate-400 py-3 sm:py-5 text-cemter pl-3 text-lg sm:text-xl font-normal  rounded-lg lg:w-[350px] sm:w-[99%] w-full">
                {" "}
                + Create you own Roadmap
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapList;
