import React from 'react'
import ButtonGuides from './ButtonGuides';
import { Link } from 'react-router-dom';


interface Button {
    label: string;
    isText: boolean,
    isNew: boolean,
    numOfMin:string
    onClick: () => void; 
}

interface GuidesSectionProps {
    heading: string;
    buttons: Button[];
}

const GuidesSection: React.FC<GuidesSectionProps> = (props) => {

    const {heading,buttons}=props

    return (
        <div className=' py-6 sm:py-12  px-2 md:px-[18%] bg-guideSectionBg ' >
            <h1 className='font-bold text-3xl pb-6 sm:text-5xl sm:pb-8'>{heading}</h1>
            <div className='pb-4'>
            {
                buttons.map((button,idx)=>{
                    return (<ButtonGuides label={button.label}
                                            isNew={button.isNew}
                                            isText={button.isText}
                                            key={idx} 
                                            numOfMin={button.numOfMin}
                                            onClick={()=>console.log("hi")}/>)
                })
            }
            </div>
            <Link to={`/${heading.toLowerCase()}`}><button className='border border-black hover:bg-blue-500 w-full py-2 rounded-md text-xl sm:rounded-3xl sm:w-44 sm:text-lg sm:bg-gradient-to-r from-viewAllLeft to-viewAllRight sm:text-white '>View All {heading} →</button></Link>
        </div>
    )
}

export default GuidesSection