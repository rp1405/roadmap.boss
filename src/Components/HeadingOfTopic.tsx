import React from "react";

interface HeadingOfTopicProps {
  topicName: string;
  topicDescription: string;
}

const HeadingOfTopic: React.FC<HeadingOfTopicProps> = ({
  topicName,
  topicDescription,
}) => {
  return (
    <div className="w-[100%] self-center border-red-500 border-2">
      <div>{topicName}</div>
      <div>{topicDescription}</div>
      <div className="flex-row">
        <button
          onClick={() => {
            console.log("Click");
          }}
        >
          All Roadmaps
        </button>
        <button>Share</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default HeadingOfTopic;
