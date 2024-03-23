import CommunitySec from "./CommunitySec";
import Footer from "./Footer";
import GuidesSection from "./GuidesSection";
import Header from "./Header";
import RoadmapList from "./RoadmapList";
import TagLine from "./TagLine";

function Homepage() {
  const buttonsArray1 = [
    {
      label: "Frontend",
      routeTo: "frontend",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Backend",
      routeTo: "backend",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Full Stack",
      routeTo: "fullstack",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Android Development",
      routeTo: "android",
      bookmarked: false,
      dotIcon: true,
      showBookmark: true,
      isLast: false,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Frontend",
      routeTo: "frontend2",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: false,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "C++",
      routeTo: "cplusplus",
      bookmarked: false,
      dotIcon: true,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
  ];

  const buttonsArray2 = [
    {
      label: "React",
      routeTo: "react",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Node Js",
      routeTo: "nodejs",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Vue",
      routeTo: "vue",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Python",
      routeTo: "python",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: false,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Java",
      routeTo: "java",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: false,
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "AWS",
      routeTo: "aws",
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: true,
      onClick: () => {
        console.log("hello");
      },
    },
  ];

  const buttonsArrayForGuides = [
    {
      label: "8 In-Demand Backend Developer Skills to Master",
      isNew: false,
      isText: true,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Introduction to LLMs",
      isNew: false,
      isText: true,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "5 Free Resources to Master LLMs",
      isNew: false,
      isText: true,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
  ];
  const buttonsArrayForVideos = [
    {
      label: "Session Based Authentication",
      isNew: false,
      isText: false,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Basic Authentication",
      isNew: false,
      isText: false,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Basics of Authentication",
      isNew: false,
      isText: false,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Graph Data Structure",
      isNew: false,
      isText: false,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
  ];
  //   const treeData = {
  //     id: "Root",
  //     children: [
  //       {
  //         id: "Child 1",
  //         children: [{ id: "Child 1.1" }, { id: "Child 1.2" }],
  //       },
  //       {
  //         id: "Child 2",
  //         children: [{ id: "Child 2.1" }, { id: "Child 2.2" }],
  //       },
  //     ],
  //   };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-headerBgTop to-headerBgBottom">
        <div className="flex justify-center">
          <Header />
        </div>

        <div className="flex justify-center ">
          <TagLine />
        </div>

        <div>
          <RoadmapList
            heading="Role based Roadmaps"
            buttons={buttonsArray1}
            createYourRoadmap={false}
          />
          <RoadmapList
            heading="Skill Bases Roadmaps"
            buttons={buttonsArray2}
            createYourRoadmap={false}
          />
        </div>
      </div>
      <div>
        <GuidesSection heading="Guides" buttons={buttonsArrayForGuides} />
        <GuidesSection heading="Videos" buttons={buttonsArrayForVideos} />
      </div>
      <div>
        <CommunitySec />
      </div>

      <div>
        <Footer />
      </div>
    </div>
    // <div>
    //   <h1>Tree Chart</h1>
    //   <TreeChart data={treeData} />
    // </div>
  );
}

export default Homepage;
