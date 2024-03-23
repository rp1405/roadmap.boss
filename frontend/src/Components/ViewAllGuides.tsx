import React from 'react'
import Header from './Header'
import CommunitySec from './CommunitySec'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import ButtonGuides from './ButtonGuides'




const ViewAllGuides = () => {

    const { section } = useParams()

    const buttonsArray = section=='guides'? [
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
    ] : [
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


    return (
        <div>
            <Header/>
            <div className='bg-white px-4 sm:px-[18%] py-8 sm:py-16'>

                {section=='guides'? 
                <>
                    <h1 className='font-bold text-3xl pb-2 sm:text-5xl sm:pb-4'>Guides</h1>
                    <h1 className='text-lg sm:text-2xl'>Succinct graphical explanations to engineering topics.</h1>
                </>
                :
                <>
                    <h1 className='font-bold text-3xl pb-2 sm:text-5xl sm:pb-4'>Videos</h1>
                    <h1 className='text-lg sm:text-2xl'>Graphical video demonstrations on software engineering topics.</h1>
                </>}
            </div>
            <hr></hr>
            <div className='bg-guideSectionBg px-4 sm:px-[18%] py-8'>
                {
                    buttonsArray.map((button,idx)=>{
                        return (<ButtonGuides label={button.label}
                                                isNew={button.isNew}
                                                isText={button.isText}
                                                key={idx} 
                                                numOfMin={button.numOfMin}
                                                onClick={()=>console.log("hi")}/>)
                    })
                }
            </div>
            <CommunitySec/>
            <Footer/>
        </div>
    )
}

export default ViewAllGuides