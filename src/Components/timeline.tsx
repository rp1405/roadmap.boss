import { useEffect, useState } from "react";
import OverlayDiv from "./OverlayDiv";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const topics = [
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
  {
    title: "HTML",
    subTopics: [
      "Learn the basics",
      "Writing the semantics",
      "Forms and validations",
      "Accessibilites",
      "SEO Basics",
    ],
  },
];
const Timeline = () => {

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    console.log(windowSize.width);
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
          {topics.map((topic, ind) => (
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
                {topic.title}
              </h1>
              {topic.subTopics.map((obj, ind) => (
                <p onClick={toggleOverlay}>{obj}</p>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {showOverlay && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50"
            onClick={toggleOverlay}
          ></div>
        )}
        {showOverlay && <OverlayDiv onClose={toggleOverlay}
                                    heading={"hello world"}
                                    paragraph={"hello world paragraph"} />}
      </div>
    </div>
  );
};
export default Timeline;
