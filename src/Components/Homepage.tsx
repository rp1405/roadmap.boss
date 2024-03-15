import CommunitySec from "./CommunitySec";
import Footer from "./Footer";
import GuidesSection from "./GuidesSection";
import Header from "./Header";
import RoadmapList from "./RoadmapList";
import TagLine from "./TagLine";
import TreeChart from "./Tree";

function Homepage() {
  const buttonsArray1 = [
    {
      label: "Frontend",
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
      bookmarked: false,
      dotIcon: false,
      showBookmark: true,
      isLast: false,
      onClick: () => {
        console.log("hello");
      },
    },

    {
      label: "Frontend",
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
      bookmarked: false,
      dotIcon: false,
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
      label: "8 In-Demand Backend Developer Skills to Master",
      isNew: false,
      isText: true,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "8 In-Demand Backend Developer Skills to Master",
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
      label: "Session Based Authentication",
      isNew: false,
      isText: false,
      numOfMin: "50",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      label: "Session Based Authentication",
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
