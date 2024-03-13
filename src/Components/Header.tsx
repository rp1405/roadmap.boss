import React,{useState,useEffect} from 'react'
import logo from '../Images/logo.jpg'
import { AlignJustify } from 'lucide-react';




const Header = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
      });
    
      const handleResize = () => {
        console.log(windowSize.width)
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

    <div className=' text-white pt-10 flex justify-between align-middle pb-8 px-4 md:px-[14%] md:w-[1500px] w-[98%]' >
        <div>
            <ul className='flex space-x-8 items-center text-xl font-normal text-slate-300 text-center'>
                <li className='hover:text-white'>
                    <img src={logo} className='rounded-md'></img>
                </li>
                {windowSize.width>600 && <><li className='hover:text-white'>
                    <AlignJustify/>
                </li>
                <li className='hover:text-white'>
                    Start Here
                </li>
                <li className='hover:text-white'>
                    Teams
                </li></>}
                <li className='hover:text-white'>
                    We're Hiring
                </li>
               
                
            </ul>
        </div>

        <div>
            {windowSize.width>600 ? <ul className='flex space-x-8 items-center text-xl font-normal text-slate-300'>
                <li className='hover:text-white'>
                    Login
                </li>
                <li>
                    <button className='bg-gradient-to-r from-customColor-light to-customColor-dark pl-10 pr-10 pt-2 pb-2 rounded-3xl'>Sign Up</button>
                </li>
            </ul> : <AlignJustify className="mt-2"/>}
        </div>
    </div>
  )
}

export default Header