import React from 'react'

import Navbar from '../components/navBarResponsive';
import FooterFull from "../components/footer.js"

function Aboutzizi(){
    return(
        <div>
            {/* navbar */}
            <Navbar />


            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                    Who we are
                </div>

                <div className="text-5xl mb-5 font-semibold">
                    This is our story
                </div>
                
                <div style={{letterSpacing:1,wordSpacing:2}} className='text-left '>
                    Zizifoundation is a philanthropic grassroot non-profit organization based in Accra-Ghana. Through philanthropy and solidarity, we partner other local organizations to implement grassroot social interventions that seek to support the less privileged in society.         
                </div>
                <div style={{letterSpacing:1,wordSpacing:2}} className='text-left mt-5 '>
                    In order to fulfill this mandate, Zizifoundation creates and implements sustainable programs that empower individuals and local communities. 
                    Through charity, our grassroot interventions offer platforms that address leadership and empowerment, technology, climate change and food security.                 
                </div>


                <div className="grid grid-cols-2 grid-rows-2 place-content-center place-items-center h-fit w-fit gap-5 p-2 max-[640px]:grid-cols-1 max-[640px]:grid-rows-3 mt-10 ">
                    
                    <img className=' h-64' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>
                    
                    <img className='object-contain row-span-2 max-[640px]:row-span-1  h-72' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>                        
            
                    <img className='object-contain h-64' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>                    
        
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