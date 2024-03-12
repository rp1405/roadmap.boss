import React from 'react'

const TagLine = () => {

    const padd = "px-4 md:px-80"

    return (
        <div className={` text-white flex flex-col items-center justify-center pt-10 text-xl pb-10 ${padd} `}  >
            <p className='p-3 border-dotted border-purple-500 border-4 rounded-lg mb-8 text-purple-500 hover:text-white hover:border-white'><span className='text-white'>NEW</span>  Announcing roadmaps for teams. <span className='font-semibold'>Learn More!</span></p>

            <p className='text-6xl font-bold mb-6 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-600 text-transparent bg-clip-text'>Developer Roadmaps</p>

            <p className='text-center text-slate-300 text-xl'>
            <span className='font-semibold'>roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.
            </p>
        </div>
    )
}

export default TagLine