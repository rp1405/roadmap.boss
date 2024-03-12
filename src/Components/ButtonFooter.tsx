import React,  { useState, useEffect } from 'react';


interface  Props {
    label:string
}

const ButtonFooter: React.FC<Props> = ({label}) => {

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
        <div>
            <button className='text-slate-400 text-xl py-2 font-semibold hover:text-white'>
                {label}
            </button>
            {windowSize.width<600 && <hr className='border-slate-500'></hr>}
            
        
        </div>
    )
}

export default ButtonFooter