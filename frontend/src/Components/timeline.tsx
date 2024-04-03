import { useEffect, useState } from "react";
import OverlayDiv from "./OverlayDiv";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CourseDetails,
  UserState,
  addCompletedCourseLocal,
  deleteCompletedCourseLocal,
} from "../slices/userSlice";
import axios from "axios";
import {
  AllCourses,
  Data,
  Topic,
  Subtopic,
  urlToCourseData,
} from "./SiteData/courses";

const Timeline = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState({ name: "", content: "" });
  const user: UserState = useSelector((state: UserState) => state);
  const params = useParams();
  const data =
    params.id && urlToCourseData[params.id]
      ? AllCourses[urlToCourseData[params.id]]
      : AllCourses["NA"];
  const dispatch = useDispatch<any>();
  const addCompletedCourse = async (
    courseTopicSubTopicTuple: CourseDetails
  ) => {
    const { _id } = user;
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/addCompletedSubtopic",
        {
          _id: _id,
          completedSubtopic: JSON.stringify(courseTopicSubTopicTuple),
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
  };
  const deleteCompletedCourse = async (
    courseTopicSubTopicTuple: CourseDetails
  ) => {
    const { _id } = user;
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + "/api/v1/deleteCompletedSubtopic",
        {
          _id: _id,
          subtopicToDelete: JSON.stringify(courseTopicSubTopicTuple),
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
  };
  const toggleOverlay = (overlayData: Subtopic) => {
    if (showOverlay) {
      setOverlayData({ name: "", content: "" });
      setShowOverlay(!showOverlay);
    } else {
      setOverlayData(overlayData);
      setShowOverlay(!showOverlay);
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.screen.width,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="mt-10 flex justify-center">
      <div className="w-[90%] md:w-[70%]">
        <VerticalTimeline lineColor="black">
          {Object.keys(data.topics).map((topic, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundImage: "linear-gradient(to bottom, #0F172A, #05080F)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                width: windowSize.width > 600 ? "30%" : "60%",
              }}
              contentArrowStyle={{
                borderRight: "200px solid #0F172A",
              }}
              iconStyle={{ background: "#0F172A", color: "#fff" }}
            >
              <h1 className="vertical-timeline-element-title font-bold text-xl self-center">
                {topic}
              </h1>
              {Object.keys(data.topics[topic].subTopics).map(
                (subTopic, index) => {
                  const courseTopicSubTopicTuple: CourseDetails = {
                    course: data.name,
                    topic: topic,
                    subTopic: subTopic,
                  };
                  const done =
                    user.completedCourses[
                      JSON.stringify(courseTopicSubTopicTuple)
                    ];
                  return (
                    <>
                      <div className="flex flex-row justify-between items-center hover:cursor-pointer">
                        <p
                          className="hover:text-yellow-300"
                          onClick={() =>
                            toggleOverlay(
                              data.topics[topic].subTopics[subTopic]
                            )
                          }
                        >
                          {data.topics[topic].subTopics[subTopic].name}
                        </p>
                        {user.isAuthenticated && (
                          <div className="hover:cursor-pointer">
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
                              className={`lucide lucide-book-check mt-3 ${
                                done ? "text-green-500" : ""
                              } hover:text-green-500`}
                              onClick={async () => {
                                if (done) {
                                  dispatch(
                                    deleteCompletedCourseLocal(
                                      courseTopicSubTopicTuple
                                    )
                                  );
                                  await deleteCompletedCourse(
                                    courseTopicSubTopicTuple
                                  );
                                } else {
                                  dispatch(
                                    addCompletedCourseLocal(
                                      courseTopicSubTopicTuple
                                    )
                                  );
                                  await addCompletedCourse(
                                    courseTopicSubTopicTuple
                                  );
                                }
                              }}
                            >
                              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                              <path d="m9 9.5 2 2 4-4" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </>
                  );
                }
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {showOverlay && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50"
            onClick={() => toggleOverlay(overlayData)}
          ></div>
        )}
        {showOverlay && (
          <OverlayDiv
            onClose={() => toggleOverlay(overlayData)}
            heading={overlayData.name}
            paragraph={overlayData.content}
          />
        )}
      </div>
    </div>
  );
};
export default Timeline;
