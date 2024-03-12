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
        height: window.innerHeight
      });
    
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
    
      useEffect(() => {
        // Add event listener when component mounts
        window.addEventListener('resize', handleResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array ensures that the effect runs only once during mount and cleans up on unmount

    return (
        <div className='py-2 '>
            <button className='flex pb-2 text-xl justify-between w-full transition-all hover:text-blue-600 hover:pl-4 duration-200'>
                <span className=''>{label}</span>
                {windowSize.width > 750 && <span className='text-lg text-slate-600'>{ isText ? "Textual" : `${numOfMin} Minutes`}</span>}
                {windowSize.width < 750 && <span>&raquo;</span>}
            </button>
            <hr></hr>
        </div>
    )
}

export default ButtonGuides