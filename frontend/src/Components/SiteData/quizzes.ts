export interface AllQuizzes {
  [key: string]: Quiz;
}
export interface Quiz {
  id: string;
  topicName: string;
  questions: { [key: string]: Question };
}
export interface Question {
  questionNo: Number;
  subtopic: string;
  level: string;
  statement: string;
  solution: string;
}
export const AllQuizzes: AllQuizzes = {
  NA: {
    id: "NA",
    topicName: "NA",
    questions: {
      "1": {
        questionNo: 1,
        subtopic: "NA",
        level: "NA",
        statement: "NA",
        solution: "NA",
      },
    },
  },
  Frontend: {
    id: "1",
    topicName: "Frontend",
    questions: {
      "1": {
        questionNo: 1,
        subtopic: "Subtopic 1",
        level: "Easy",
        statement: "Question 1 statement.",
        solution: "Question 1 solution.",
      },
      "2": {
        questionNo: 2,
        subtopic: "Subtopic 2",
        level: "Medium",
        statement: "Question 2 statement.",
        solution: "Question 2 solution.",
      },
    },
  },
  "Topic 2": {
    id: "2",
    topicName: "Topic 2",
    questions: {
      question1: {
        questionNo: 1,
        subtopic: "Subtopic A",
        level: "Easy",
        statement: "Question A statement.",
        solution: "Question A solution.",
      },
      question2: {
        questionNo: 2,
        subtopic: "Subtopic B",
        level: "Medium",
        statement: "Question B statement.",
        solution: "Question B solution.",
      },
    },
  },
};
