import React from 'react'


interface ButtonProps {
  label: string,
  bookmarked: boolean,
  showBookmark: boolean,
  dotIcon: boolean,
}

const ButtonRoadMap: React.FC<ButtonProps> = ({label,bookmarked,dotIcon,showBookmark}) => {

  return (
      <div className=''>
          <button className='relative bg-headerBgTop border-slate-600 border hover:border-white text-slate-400  py-5 lg:pr-60 md:pr-96 pr-[430px] text-xl font-semibold rounded-lg lg:w-[310px] md:w-[500px] w-[97%]'>
              {label}

              {(!bookmarked && showBookmark) && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark absolute top-0 right-0 text-slate-400 m-2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>}

              {
                  (bookmarked && showBookmark) && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark-check absolute top-0 right-0 text-slate-400 m-2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/><path d="m9 10 2 2 4-4"/></svg>
              }

          </button>
      </div>
  )
}

export default ButtonRoadMap
