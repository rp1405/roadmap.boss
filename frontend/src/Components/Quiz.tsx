import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface QuestionProps {
  question: {
    subTopic: string;
    level: string;
    statement: string;
    solution: string;
  };
}
interface ButtonProps {
  text: string;
  svg: JSX.Element;
  textSvgAndBorderColor: string;
}

const ControlButton: React.FC<ButtonProps> = ({
  text,
  svg,
  textSvgAndBorderColor,
}) => {
  return (
    <button
      className={`rounded-lg px-5 py-4 flex items-center border border-${textSvgAndBorderColor} text-${textSvgAndBorderColor} focus:outline-none focus:border-${textSvgAndBorderColor} hover:bg-${textSvgAndBorderColor} hover:text-white hover:bg-black`}
    >
      <span className="hidden md:inline-block whitespace-nowrap font-semibold">
        {text}
      </span>
      <div className="mx-2">{svg}</div>
    </button>
  );
};
const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="w-[90%]  md:w-[70%] mt-10">
      <div className="border-2 border-[#D1D5DA] rounded-lg items-center flex flex-col py-10 h-[500px] justify-between">
        <div className="text-[#6A7280] font-semibold text-center">{`${question.subTopic} ${question.level}`}</div>
        <div className="font-bold text-2xl md:text-3xl text-center">
          {question.statement}
        </div>
        <div className="text-[#6A7280] font-semibold text-center text-lg md:text-xl underline underline-offset-4">
          Click To Reveal the Answer
        </div>
      </div>
      <div className="flex flex-row justify-between px-2 rounded-lg py-5">
        <ControlButton
          text="Already Know That"
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
              className="lucide lucide-circle-check-big"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          }
          textSvgAndBorderColor="black"
        />
        <ControlButton
          text="Didn't Know That"
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
              className="lucide lucide-sparkle"
            >
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
            </svg>
          }
          textSvgAndBorderColor="black"
        />
        <ControlButton
          text="Skip Question"
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
              className="lucide lucide-skip-forward"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" x2="19" y1="5" y2="19" />
            </svg>
          }
          textSvgAndBorderColor="red-500"
        />
      </div>
    </div>
  );
};

const Quiz = () => {
  const quizTopic = "JavaScript";
  const questions = [
    {
      subTopic: "Promise",
      level: "Advanced",
      statement: "What is a Promise?",
      solution: "I dont know.",
    },
  ];
  const [questionNo, setQuestionNo] = useState(0);
  return (
    <>
      <Header />
      <div className="w-[100vw] flex justify-center my-10">
        <div className="w-[90%] md:w-[70%] flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl">{`${quizTopic} Questions`}</h1>
          <h2 className="mt-5 font-semibold text-lg md:text-xl text-[#6A7280]">{`Test, rate and improve your ${quizTopic} knowledge with these questions.`}</h2>
          <Question question={questions[questionNo]} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
