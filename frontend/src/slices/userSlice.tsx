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
  isAuthenticated: false,
  _id: "",
  name: "",
  username: "",
  email: "",
  mobileNumber: "",
  completedCourses: {},
  completedQuestions: {},
};

// Async thunk for adding completed course
export const addCompletedCourse = createAsyncThunk(
  "AddCompletedSubtopic",
  async (payload: CourseDetails, { getState }) => {
    const user = (getState() as { user: UserState }).user;
    const { _id } = user;
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/addCompletedSubtopic",
        {
          _id,
          completedSubtopic: JSON.stringify(payload),
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      console.log("HEREREREER");
      return response.data; // You might want to return something if needed
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
export const deleteCompletedCourse = createAsyncThunk(
  "DeleteCompletedCourse",
  async (payload: CourseDetails, { getState }) => {
    const user = (getState() as { user: UserState }).user;
    const { _id } = user;
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/deleteCompletedSubtopic",
        {
          _id,
          subtopicToDelete: JSON.stringify(payload),
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      return response.data; // You might want to return something if needed
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Async thunk for adding completed question
// export const addCompletedQuestion = createAsyncThunk(
//   "AddCompletedQuestion",
//   async (payload: QuestionDetails, { getState }) => {
//     const user = (getState() as { user: UserState }).user;
//     const { _id } = user;
//     try {
//       const response = await axios.patch(
//         process.env.REACT_APP_BACKEND_URL + "/api/v1/addCompletedQuestion",
//         {
//           _id,
//           completedQuestion: JSON.stringify(payload),
//         },
//         {
//           withCredentials: true, // Include credentials in the request
//         }
//       );
//       return response.data; // You might want to return something if needed
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );
export const deleteCompletedQuestion = createAsyncThunk(
  "DeleteCompletedQuestion",
  async (payload: QuestionDetails, { getState }) => {
    const user = (getState() as { user: UserState }).user;
    const { _id } = user;
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/deleteCompletedQuestion",
        {
          _id,
          questionToDelete: JSON.stringify(payload),
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      return response.data; // You might want to return something if needed
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addCompletedCourse.fulfilled, (state, action) => {
      addCompletedCourseLocal(JSON.stringify(action.payload));
    });
    // builder.addCase(addCompletedQuestion.fulfilled, (state, action) => {
    //   state.completedCourses[action.payload] = false;
    // });
  },
});

// Export actions
export const {
  setUser,
  setIsAuthenticated,
  addCompletedCourseLocal,
  deleteCompletedCourseLocal,
  addCompletedQuestionLocal,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
