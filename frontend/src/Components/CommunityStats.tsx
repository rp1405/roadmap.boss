import React, {useState, useEffect} from 'react'
import { UsersRound } from 'lucide-react'
import CommunityStatsButton from './CommunityStatsButton';




interface CommnunityStatsProps {
    blueBgText: string,
    notBlueBgText: string,
    numStats: string,
    platform: string,
    svgInfo: React.ReactNode,
    headingInfo: string,
    subHeadingInfo: string
    isBorder:boolean
    onClick: () => void; 
}

const CommunityStats: React.FC<CommnunityStatsProps> = (props) => {

    const {blueBgText, notBlueBgText, numStats, platform, svgInfo, headingInfo, subHeadingInfo,isBorder} = props;

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

     <div className='my-4 grid grid-cols-2 sm:grid-cols-1 gap-0 items-center'>
                    <h1 className='text-2xl font-bold sm:text-5xl mb-1 '>{numStats}</h1>
                    <h1 className='sm:text-md '>{platform}</h1>
                </div>

    return (
        <div className={`${isBorder?'sm:border-l-2 sm:border-r-2':'border-0'} `}>
            <div className='w-full bg-guideSectionBg sm:py-2 sm:px-4 rounded-lg my-4 sm:bg-white p-4'>
                <h1 className='text-xl text-blue-500 mb-8'><span className='bg-blue-500 text-white rounded-md p-1 m-1'>{blueBgText}</span>{notBlueBgText}</h1>
                
                <div className='my-4 grid  sm:grid-cols-1 gap-0 items-center'>
                    {windowSize.width>600 ? <>
                        <h1 className='text-2xl font-bold sm:text-5xl mb-1'>{numStats}</h1>
                        <h1 className='sm:text-md '>{platform}</h1>
                    </>: <h1 className='text-2xl font-bold sm:text-5xl mb-1 mr-1'>{numStats} <span className='font-normal text-xl'>{platform}</span></h1>}
                </div>
                
                <CommunityStatsButton headingInfo={headingInfo}
                                      svgInfo={svgInfo}
                                      subHeadingInfo={subHeadingInfo}/>
                
            </div>
        </div>
    )
}

export default CommunityStats