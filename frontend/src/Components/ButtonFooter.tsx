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
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
      
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