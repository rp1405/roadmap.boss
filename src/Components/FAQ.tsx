import React from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Popular Articles",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-[90%] md:w-[70%]">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <section className="faq">
          {questions.map((item) => (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isActive, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper border-b-2 border-gray-300 py-4">
      <div className="question flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">{question}</h3>
        <button onClick={handleClick}>
          <svg
            className={`h-6 w-6 ${isActive && "transform rotate-180"}`}
            viewBox="0 0 320 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div
        className={`answer ${
          isActive ? "block" : "hidden"
        } text-lg text-gray-600 font-semibold pt-2`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
