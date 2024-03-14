import React from 'react'
import { UsersRound } from 'lucide-react';
import CommunityStats from './CommunityStats';


const CommunitySec = () => {


    const data = [
        {
          blueBgText: "Rank 6th",
          notBlueBgText: "put of 28M!",
          numStats: "258k",
          platform: "GitHub Stars",
          svgInfo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,

          headingInfo: "Star us on GitHub",
          subHeadingInfo: "Help us reach #1",
          isBorder:false,
          onClick: () => {
            console.log("Clicked 1");
          }
        },
        {
          blueBgText: "+55k",
          notBlueBgText: "every month",
          numStats: "850k",
          platform: "Registered Users",
          svgInfo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>,

          headingInfo: "Register yourself",
          subHeadingInfo: "Commit to your growth",
          isBorder:true,
          onClick: () => {
            console.log("Clicked 1");
          }
        },
        {
          blueBgText: "+1.5k",
          notBlueBgText: "every month",
          numStats: "18k",
          platform: "Discord Members",
          svgInfo: <svg width="24px" height="24px" viewBox="0 -28.5 256 256" version="1.1" preserveAspectRatio="xMidYMid" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#000000" fillRule="nonzero"></path>
            </g>
          </g>
        </svg>
        ,

          headingInfo: "Join on Discord",
          subHeadingInfo: "Join the community",
          isBorder:false,
          onClick: () => {
            console.log("Clicked 1");
          }
        },
        
        
    ]

    return (
        <div className=' py-6  sm:py-12  px-4 md:mx-[18%]  sm:text-center ' >
            <h1 className='font-bold text-3xl sm:text-5xl '>Join the Commnunity</h1>
            <p className='text-sm sm:text-xl my-6 sm:px-40'>roadmap.sh is the <u className='font-semibold'>6th most starred project on GitHub</u> and is visited by hundreds of thousands of developers every month.</p>

            <div className='sm:flex justify-center'>

                {
                    data.map((info,idx)=>{
                        return (
                            <CommunityStats blueBgText={info.blueBgText}
                                            notBlueBgText={info.notBlueBgText}
                                            numStats={info.numStats}
                                            platform={info.platform}
                                            svgInfo={info.svgInfo}
                                            headingInfo={info.headingInfo}
                                            subHeadingInfo={info.subHeadingInfo}
                                            key={idx}
                                            onClick={info.onClick}
                                            isBorder={info.isBorder}
                                            />
                        )
                    })
                }
                
                
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