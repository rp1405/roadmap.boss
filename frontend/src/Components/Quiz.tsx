import { Dispatch, SetStateAction, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { UserState, addCompletedQuestionLocal } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { urlToCourseData } from "./SiteData/courses";
import { AllQuizzes, Question } from "./SiteData/quizzes";
import axios from "axios";

interface QuestionProps {
  topicName: string;
  question: Question;
  setQuestionNo: Dispatch<SetStateAction<number>>;
  totalQuestions: number;
}
interface ButtonProps {
  text: string;
  svg: JSX.Element;
  textSvgAndBorderColor: string;
  onClick: () => void;
}

const ControlButton: React.FC<ButtonProps> = ({
  text,
  svg,
  textSvgAndBorderColor,
  onClick,
}) => {
  return (
    <button
      className={`rounded-lg px-5 py-4 flex items-center border border-${textSvgAndBorderColor} text-${textSvgAndBorderColor} focus:outline-none focus:border-${textSvgAndBorderColor} hover:bg-${textSvgAndBorderColor} hover:text-white hover:bg-black`}
      onClick={onClick}
    >
      <span className="hidden md:inline-block whitespace-nowrap font-semibold">
        {text}
      </span>
      <div className="mx-2">{svg}</div>
    </button>
  );
};
const QuestionProp: React.FC<QuestionProps> = ({
  question,
  topicName,
  setQuestionNo,
  totalQuestions,
}) => {
  const user: UserState = useSelector((state: UserState) => state);
  const dispatch = useDispatch();
  const done =
    user.completedQuestions[
      JSON.stringify({ topicName: topicName, question: question })
    ];
  return (
    <div className="w-[90%]  md:w-[70%] mt-10">
      <div className="border-2 border-[#D1D5DA] rounded-lg items-center flex flex-col py-10 h-[500px] justify-between">
        <div className="flex flex-row justify-between w-[90%] md:w-[30%]">
          <div className="text-[#6A7280] text-xl font-semibold text-center">
            {question.subtopic}
          </div>
          <div className="text-[#6A7280] text-xl font-semibold text-center">
            {question.level}
          </div>
          {user.isAuthenticated && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={`lucide lucide-circle-check-big ${
                done ? "text-green-700" : "text-slate-600"
              }`}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          )}
        </div>
        <div className="font-bold text-2xl md:text-3xl text-center">
          {question.statement}
        </div>
        <div className="text-[#6A7280] font-semibold text-center text-lg md:text-xl underline underline-offset-4">
          Click To Reveal the Answer
        </div>
      </div>
      <div className="flex flex-row justify-between px-2 rounded-lg py-5">
        <ControlButton
          text="Previous Question"
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
              className="lucide lucide-skip-back"
            >
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1="5" x2="5" y1="19" y2="5" />
            </svg>
          }
          textSvgAndBorderColor="black"
          onClick={() => {
            setQuestionNo((prev) => {
              if (prev > 1) {
                return prev - 1;
              } else {
                return prev;
              }
            });
          }}
        />
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
          onClick={async () => {
            if (!done) {
              await axios.patch(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/addCompletedQuestion`,
                {
                  _id: user._id,
                  completedQuestion: JSON.stringify({
                    topicName: topicName,
                    question: question,
                  }),
                },
                {
                  headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              dispatch(
                addCompletedQuestionLocal({
                  topicName: topicName,
                  question: question,
                })
              );
            }
            setQuestionNo((prev) => {
              if (totalQuestions > prev) {
                return prev + 1;
              } else {
                return prev;
              }
            });
            console.log(user);
          }}
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
          onClick={() => {
            setQuestionNo((prev) => {
              if (totalQuestions > prev) {
                return prev + 1;
              } else {
                return prev;
              }
            });
          }}
        />
      </div>
    </div>
  );
};

const Quiz = () => {
  const user: UserState = useSelector((state: UserState) => state);
  const params = useParams();
  const data =
    params.id && urlToCourseData[params.id]
      ? AllQuizzes[urlToCourseData[params.id]]
      : AllQuizzes["NA"];
  const [questionNo, setQuestionNo] = useState(1);
  const totalQuestions = Object.keys(data.questions).length;
  return (
    <>
      <Header />
      <div className="w-[100vw] flex justify-center my-10">
        <div className="w-[90%] md:w-[70%] flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl">{`${data.topicName} Questions`}</h1>
          <h2 className="mt-5 font-semibold text-lg md:text-xl text-[#6A7280]">{`Test, rate and improve your ${data.topicName} knowledge with these questions.`}</h2>
          <QuestionProp
            topicName={data.topicName}
            question={data.questions[questionNo]}
            setQuestionNo={setQuestionNo}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
