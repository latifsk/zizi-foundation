import React from 'react'

import NaviBar from '../components/naviBar';
import FooterFull from "../components/footer.js"

function Aboutzizi(){
    return(
        <div>
            <NaviBar />

            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                    Who we are
                </div>

                <div className="text-5xl mb-5 font-semibold">
                    This is our story
                </div>
                
                <div className='text-left'>
                    Story text kfjksfisfifif wjnfnsfihifnw wiofhiowhfioh oiwhfiowhfih difhj iwhrpiwhniufhsiohfiuhfhifhiw iowfhiohfihifhiowfhoifhnwindinfifnwi ifjiwjf iwiwj wdijiwjropj
                </div>


                <div className="grid grid-cols-2 grid-rows-2 gap-5 p-2">
                    
                    <img className='' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                    
                    <img className='object-cover row-span-2 h-full' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>                        
            
                    <img className='object-contain h-fit' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>                    
        
                </div>


                {/* our team */}
                <div className="flex flex-col place-items-center my-10 border-t">
                    <div  className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        Our team
                    </div>
                    <div className="text-5xl mb-5 font-semibold">
                        Meet the real world heroes
                    </div>


                    {/* make each member's rollcall clickable in the future to lead to their portfolios and social media*/}
                    <div className="grid grid-cols-4 gap-4">
                        <div className='flex flex-col place-items-center'>
                            <img className='object-contain rounded-full h-28' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                            <div className='font-bold'>
                                Name
                            </div>
                            <div className='text-slate-700'>
                                Post
                            </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                            <img className='object-contain rounded-full h-28' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                            <div className='font-bold'>
                                Name
                            </div>
                            <div className='text-slate-700'>
                                Post
                            </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                            <img className='object-contain rounded-full h-28' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                            <div className='font-bold'>
                                Name
                            </div>
                            <div className='text-slate-700'>
                                Post
                            </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                            <img className='object-contain rounded-full h-28' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                            <div className='font-bold'>
                                Name
                            </div>
                            <div className='text-slate-700'>
                                Post
                            </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                            <img className='object-contain rounded-full h-28' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                            <div className='font-bold'>
                                Name
                            </div>
                            <div className='text-slate-700'>
                                Post
                            </div>
                        </div>

                    </div>
                </div>





            </div>

            {/* footer */}
            <FooterFull />



        </div>
    )
}

export default Aboutzizi;