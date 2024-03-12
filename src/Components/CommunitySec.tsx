import React from 'react'
import { UsersRound } from 'lucide-react';


const CommunitySec = () => {
    return (
        <div className=' py-6  sm:py-12  px-4 md:mx-[18%]  sm:text-center ' >
            <h1 className='font-bold text-3xl sm:text-5xl '>Join the Commnunity</h1>
            <p className='text-xl my-6 sm:px-40'>roadmap.sh is the <u className='font-semibold'>6th most starred project on GitHub</u> and is visited by hundreds of thousands of developers every month.</p>

            <div className='sm:flex'>

                <div className='w-full bg-guideSectionBg sm:py-2 sm:px-4 rounded-lg my-4 sm:bg-white p-4'>
                    <h1 className='text-xl text-blue-500'><span className='bg-blue-500 text-white rounded-md p-1'>Rank 6th</span> put of 28M!</h1>
                    
                    <div className='my-4 grid grid-cols-2 sm:grid-cols-1 gap-0 items-center'>
                        <h1 className='text-2xl font-bold sm:text-5xl '>258k</h1>
                        <h1 className='sm:text-lg '>GitHub Stars</h1>
                    </div>
                    
                    <button className='p-2 bg-white border border-black rounded-md w-60'>

                        <div className='flex justify-center'>
                            <UsersRound/>
                            <p className='font-semibold text-lg pl-2'>Star us on GitHub</p>
                        </div>
                        
                        <p className='text-base text-slate-500'>Help us reach #1</p>
                    </button>
                </div>
                <div className='w-full bg-guideSectionBg sm:py-2 sm:px-4 my-4 sm:bg-white sm:border-l-2 sm:border-r-2'>
                    <h1 className='text-xl text-blue-500'><span className='bg-blue-500 text-white rounded-md p-1'>Rank 6th</span> put of 28M!</h1>
                    
                    <div className='my-4 grid grid-cols-2 sm:grid-cols-1 gap-0 items-center'>
                        <h1 className='text-2xl font-bold sm:text-5xl '>258k</h1>
                        <h1 className='sm:text-lg '>GitHub Stars</h1>
                    </div>
                    
                    <button className='p-2 bg-white border border-black rounded-md w-60'>

                        <div className='flex justify-center'>
                            <UsersRound/>
                            <p className='font-semibold text-lg pl-2'>Star us on GitHub</p>
                        </div>
                        
                        <p className='text-base text-slate-500'>Help us reach #1</p>
                    </button>
                </div>
                <div className='w-full bg-guideSectionBg sm:py-2 sm:px-4 rounded-lg my-4 sm:bg-white'>
                    <h1 className='text-xl text-blue-500'><span className='bg-blue-500 text-white rounded-md p-1'>Rank 6th</span> put of 28M!</h1>
                    
                    <div className='my-4 grid grid-cols-2 sm:grid-cols-1 gap-0 items-center'>
                        <h1 className='text-2xl font-bold sm:text-5xl '>258k</h1>
                        <h1 className='sm:text-lg '>GitHub Stars</h1>
                    </div>
                    
                    <button className='p-2 bg-white border border-black rounded-md w-60'>

                        <div className='flex justify-center'>
                            <UsersRound/>
                            <p className='font-semibold text-lg pl-2'>Star us on GitHub</p>
                        </div>
                        
                        <p className='text-base text-slate-500'>Help us reach #1</p>
                    </button>
                </div>
                
                {/* <div className='w-full bg-guideSectionBg p-2 my-4 sm:bg-white  sm:border-l-2 sm:border-r-2'>
                    <h1 className='text-xl text-blue-500'><span className='bg-blue-500 text-white rounded-md p-1'>Rank 6th</span> put of 28M!</h1>
                    <h1 className='py-5 text-2xl'><span className='font-bold'>258k</span> <span>GitHub Stars</span></h1>
                    <button className='p-2 bg-white border border-black rounded-md w-60'>
                        <p className='font-semibold text-lg'>★ Star us on GitHub</p>
                        <p className='text-base text-slate-500'>Help us reach #1</p>
                    </button>
                </div> */}
                
               
                

            </div>

        </div>
    )
}

export default CommunitySec