import CommunitySec from "./CommunitySec";
import FAQ from "./FAQ";
import Header from "./Header";
import Footer from "./Footer";
import HeadingOfTopic from "./HeadingOfTopic";
import Timeline from "./timeline";
import { useParams } from "react-router-dom";
import { AllCourses, urlToCourseData } from "./SiteData/courses";

export default function DetailPage() {
  const params = useParams();
  const data =
    params.id && urlToCourseData[params.id]
      ? AllCourses[urlToCourseData[params.id]]
      : AllCourses["NA"];
  return (
    <>
      <Header />
      <div className={`"w-[100vw] items-center justify-center"`}>
        <HeadingOfTopic
          courseHeading={data.topicHeading}
          courseDescription={data.topicDescription}
        />
        <Timeline />
        <FAQ />
      </div>
      <CommunitySec />
      <Footer />
    </>
  );
}
