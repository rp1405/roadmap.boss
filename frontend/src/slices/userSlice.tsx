import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for CourseDetails and QuizDetails
export type CourseDetails = {
  course: string;
  topic: string;
  subTopic: string;
};

export type QuestionDetails = {
  quizId: string;
  questionNumber: number;
};

// Define state type
export type UserState = {
  accessToken: string;
  isAuthenticated: boolean;
  _id: string;
  name: string;
  username: string;
  email: string;
  mobileNumber: string;
  completedCourses: { [key: string]: boolean };
  completedQuestions: { [key: string]: boolean };
};

// Initial state
export const initialState: UserState = {
  accessToken: "",
  isAuthenticated: false,
  _id: "",
  name: "",
  username: "",
  email: "",
  mobileNumber: "",
  completedCourses: {},
  completedQuestions: {},
};
// Slice
const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, ...payload };
    },
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
    setAccessToken(state, { payload }) {
      state.accessToken = payload;
    },
    addCompletedCourseLocal(state, { payload }) {
      return {
        ...state,
        completedCourses: {
          ...state.completedCourses,
          [JSON.stringify(payload)]: true,
        },
      };
    },

    deleteCompletedCourseLocal(state, { payload }) {
      // Create a new object without the completed course to delete
      // const { [payload]: _, ...newCompletedCourses } = state.completedCourses;
      return {
        ...state,
        completedCourses: {
          ...state.completedCourses,
          [JSON.stringify(payload)]: false,
        },
      };
    },
    addCompletedQuestionLocal(state, { payload }) {
      console.log("HEREE123456");
      console.log(payload);
      return {
        ...state,
        completedQuestions: {
          ...state.completedQuestions,
          [JSON.stringify(payload)]: true,
        },
      };
    },
  },
});

// Export actions
export const {
  setUser,
  setIsAuthenticated,
  setAccessToken,
  addCompletedCourseLocal,
  deleteCompletedCourseLocal,
  addCompletedQuestionLocal,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
