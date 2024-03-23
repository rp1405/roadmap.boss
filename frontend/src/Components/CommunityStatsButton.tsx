import React from 'react'

interface Button {
    svgInfo: React.ReactNode,
    headingInfo: string,
    subHeadingInfo: string
}

const CommunityStatsButton: React.FC<Button> = (props) => {


    const {svgInfo, headingInfo, subHeadingInfo} = props

    return (
        <div>
            <button className='p-1 bg-white border border-black rounded-md w-56'>
                <div className='flex justify-center'>
                    {svgInfo}
                    <p className='font-semibold text-lg pl-2'>{headingInfo}</p>
                </div>
                <p className='text-base text-slate-500'>{subHeadingInfo}</p>
            </button>
        </div>
    )
}

export default CommunityStatsButton