import React from "react";
import ButtonFunction from "./ButtonFunc";
import { useNavigate, useParams } from "react-router-dom";
import { AllCourses, urlToCourseData } from "./SiteData/courses";

interface HeadingOfTopicProps {
  courseHeading: string;
  courseDescription: string;
}

const HeadingOfTopic: React.FC<HeadingOfTopicProps> = ({
  courseHeading,
  courseDescription,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="flex justify-center w-[100vw] mt-10">
      <div className="w-[90%] md:w-[70%]">
        <div className="text-3xl md:text-5xl font-bold">{courseHeading}</div>
        <div className="mt-2 text-lg md:text-xl text-[#6C7280] ">
          {courseDescription}
        </div>
        <div className="flex flex-row justify-between">
          <ButtonFunction
            backgroundColor="#4B5563"
            text="All Roadmaps"
            svg={
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
                className="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            }
            textColor="white"
            onClick={() => {}}
          />
          <ButtonFunction
            className="ml-[1.5%]"
            backgroundColor="#FACC14"
            text="Share"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-share-2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            }
            onClick={() => {}}
            textColor="black"
          />
          <ButtonFunction
            className="ml-[1.5%]"
            backgroundColor="#FACC14"
            text="Go To Quiz"
            svg={
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
                className="lucide lucide-file-question"
              >
                <path d="M12 17h.01" />
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
              </svg>
            }
            onClick={() => {
              navigate(`../../quiz/${params.id}`);
            }}
            textColor="black"
          />
          <ButtonFunction
            className="ml-auto"
            backgroundColor="#4B5563"
            text="Suggest Changes"
            svg={
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
                className="lucide lucide-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            }
            onClick={() => {}}
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingOfTopic;
