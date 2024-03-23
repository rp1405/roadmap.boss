import React, { useState, useEffect } from 'react'


interface ButtonProps {
    label: string;
    isText: boolean,
    isNew: boolean,
    numOfMin:string,
    onClick: () => void; 
}


const ButtonGuides: React.FC<ButtonProps> = ({label,isText,isNew,numOfMin}) => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
      });
    
      const handleResize = () => {
        setWindowSize({
          width: window.screen.width,
        });
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    return (
        <div className='py-2 '>
            <button className='flex pb-2 text-md text-left justify-between w-full transition-all hover:text-blue-600 hover:pl-4 duration-200'>
                <span className=''>{label}</span>
                {windowSize.width > 750 && <span className='text-lg text-slate-600'>{ isText ? "Textual" : `${numOfMin} Minutes`}</span>}
                {windowSize.width < 750 && <span>&raquo;</span>}
            </button>
            <hr></hr>
        </div>
    )
}

export default ButtonGuides