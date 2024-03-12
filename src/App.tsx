import "./App.css";
import CommunitySec from "./Components/CommunitySec";
import Footer from "./Components/Footer";
import GuidesSection from "./Components/GuidesSection";
import Header from "./Components/Header";
import RoadmapList from "./Components/RoadmapList";
import TagLine from "./Components/TagLine";

function App() {

    const buttonsArray = [
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:true,  onClick:()=>{console.log("hello")} },
       
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:true,  onClick:()=>{console.log("hello")} },
       
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:true,  onClick:()=>{console.log("hello")} },
       
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:true,  onClick:()=>{console.log("hello")} },
       
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:false,  onClick:()=>{console.log("hello")} },
       
        { label: 'Frontend', bookmarked:false, dotIcon: false, showBookmark:false,  onClick:()=>{console.log("hello")} },
       
      ];

      const buttonsArrayForGuides =[
        { label: '8 In-Demand Backend Developer Skills to Master', isNew:false , isText:true,  numOfMin:"50",   onClick:()=>{console.log("hello")} },
        { label: '8 In-Demand Backend Developer Skills to Master', isNew:false , isText:true, numOfMin:"50",   onClick:()=>{console.log("hello")} },
        { label: '8 In-Demand Backend Developer Skills to Master', isNew:false , isText:true, numOfMin:"50",   onClick:()=>{console.log("hello")} },
       
      ]
      const buttonsArrayForVideos =[
        { label: 'Session Based Authentication', isNew:false , isText:false,  numOfMin:"50",   onClick:()=>{console.log("hello")} },
        { label: 'Session Based Authentication', isNew:false , isText:false, numOfMin:"50",   onClick:()=>{console.log("hello")} },
        { label: 'Session Based Authentication', isNew:false , isText:false, numOfMin:"50",   onClick:()=>{console.log("hello")} },
       
      ]

    return (
        <div className="w-full">
            <div className="bg-gradient-to-b from-headerBgTop to-headerBgBottom">
                <div>
                    <Header/>
                </div>

                <div>
                    <TagLine/>
                </div>

                <div>
                    <RoadmapList heading="Role based Roadmaps" 
                                    buttons={buttonsArray}/>
                    <RoadmapList heading="Skill Bases Roadmaps" 
                                    buttons={buttonsArray}/>
                    <RoadmapList heading="Best Practices" 
                                    buttons={buttonsArray}/>
                    <RoadmapList heading="Best Questions" 
                                    buttons={buttonsArray}/>
                </div>
            </div>
            <div>

                <GuidesSection heading="Guides"
                                buttons={buttonsArrayForGuides}/>
                <GuidesSection heading="Videos"
                                buttons={buttonsArrayForVideos}/>

            </div>
            <div>
                <CommunitySec/>
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
