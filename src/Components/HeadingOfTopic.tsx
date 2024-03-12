import React from "react";
import ButtonFunction from "./ButtonFunc";

interface HeadingOfTopicProps {
  topicName: string;
  topicDescription: string;
}

const HeadingOfTopic: React.FC<HeadingOfTopicProps> = ({
  topicName,
  topicDescription,
}) => {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[70%]">
        <div className="text-5xl font-bold">{topicName}</div>
        <div className="mt-2 text-xl text-[#6C7280]">{topicDescription}</div>
        <div className="flex flex-row">
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
          />
          <ButtonFunction
            className="ml-[1.5%]"
            backgroundColor="#EAB30A"
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
            textColor="black"
          />
          <ButtonFunction
            className="ml-[1.5%]"
            backgroundColor="#EAB30A"
            text="Download"
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
                className="lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            }
            textColor="black"
          />
          <ButtonFunction
            className="ml-[35%]"
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
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingOfTopic;
