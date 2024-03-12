import React from 'react'
import logo from '../Images/logo.jpg'
import { AlignJustify } from 'lucide-react';

const Header = () => {

 

  return (
    <div className=' text-white pt-10 flex justify-between align-middle pb-8 px-10 md:px-80' >
        <div>
            <ul className='flex space-x-8 items-center text-xl font-normal text-slate-300 '>
                <li className='hover:text-white'>
                    <img src={logo}></img>
                </li>
                <li className='hover:text-white'>
                    <AlignJustify/>
                </li>
                <li className='hover:text-white'>
                    Start Here
                </li>
                <li className='hover:text-white'>
                    Teams
                </li>
                <li className='hover:text-white'>
                    We're Hiring
                </li>
                
            </ul>
        </div>

        <div>
            <ul className='flex space-x-8 items-center text-xl font-normal text-slate-300'>
                <li className='hover:text-white'>
                    Login
                </li>
                <li>
                    <button className='bg-gradient-to-r from-customColor-light to-customColor-dark pl-10 pr-10 pt-2 pb-2 rounded-3xl'>Sign Up</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header