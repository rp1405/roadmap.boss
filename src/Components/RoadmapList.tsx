import React from 'react'
import ButtonRoadMap from './ButtonRoadMap';

interface Button {
    label: string;
    bookmarked:boolean,
    dotIcon:boolean,
    showBookmark:boolean,
    onClick: () => void; 
}

interface RoadmapListProps {
    heading: string;
    buttons: Button[];
}

const RoadmapList: React.FC<RoadmapListProps> = (props) => {


    const {heading, buttons} = props;

    const padd = "px-4 md:px-80"


    return (

        <div className='py-10 text-center '>

            <div className="flex items-center text-white border-solid pb-16 ">
                <hr className="flex-grow  border-slate-500"/>
                <p className=" rounded-2xl border text-slate-400 border-slate-500 py-2 px-4 text-xl">{heading}</p>
                <hr className="flex-grow border-slate-500 text-slate-500"/>
            </div>

            <div className='px-2 md:w-[1200px] lg:w-[1500px] md:mx-auto'>
                <div className= 'px-2 pb-20 lg:px-[14%] '>

                    <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:gap-2 md:gap-2 gap-2'>
                
                       
                        {
                            buttons.map((button,idx)=>{
                                return (<ButtonRoadMap label={button.label}
                                                    bookmarked={button.bookmarked}
                                                    dotIcon={button.dotIcon}
                                                    key={idx} 
                                                    showBookmark={button.showBookmark}/>)
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default RoadmapList