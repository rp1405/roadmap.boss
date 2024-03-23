import React from 'react'

interface  Props {
    title: string,
    subtitle?: string,
}

const OverlayButton: React.FC<Props> = ({title,subtitle}) => {


    return (
        <div className='hover:bg-overlayHoverColor px-4 py-2'>
            <h1 className='text-slate-200 text-xl font-semibold'>{title}</h1>
            <h1 className='text-slate-400 text-lg'>{subtitle}</h1>
        </div>
    )
}

export default OverlayButton