import React,{ useState, useEffect} from 'react'

const TagLine = () => {

      const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
      });
    
      const handleResize = () => {
       
          setWindowSize({
              width: window.innerWidth,
          });
          console.log(window.innerWidth);
      };
    
      useEffect(() => {
          window.addEventListener('resize', handleResize);
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []); 

    return (
        <div className={` text-white ${windowSize.width>600 && "flex flex-col"} items-center justify-center pt-10 text-xl pb-10 md:px-[18%] lg:w-[1500px] md:w-[1200px] px-2`}  >
            <button className='px-3 py-1 border-dotted border-purple-500 border-4 rounded-lg mb-8 text-purple-500 hover:text-white hover:border-white'><span className='text-white mr-1'>NEW</span> {windowSize.width > 600 ? ( <> Announcing roadmaps for teams.{' '}
                                                          <span className='font-semibold'>Learn More!</span>
                                                        </> ) : ( 'Roadmaps for teams')} 
            </button> 

            <p className=' text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-600 text-transparent bg-clip-text '>Developer Roadmaps</p>

            {windowSize.width>600 ? <p className='text-center text-slate-300 text-xl'>
            <span className='font-semibold'>roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.
            </p> : <p className='text-slate-400 text-lg'>Community created roadmaps, guides and articles to help developers grow in their career.</p>
            }

            
        </div>
    )
}

export default TagLine