import React from "react";


import Mainpic from '../assets/smilingkids.jpg'


import {BiDonateHeart as Donate} from "react-icons/bi"
import {GrTechnology as Technology} from "react-icons/gr"
import {GiTrophiesShelf as Leadership} from "react-icons/gi"
import {SiCodeclimate as Climate} from "react-icons/si"


function LandingPage(){


    return(
        <div>
            {/* first page */}
            <div  style={{backgroundImage: `url(${Mainpic})`, backgroundSize:"cover", height:"100vh", color:"white" }}>
                <div  className="h-full flex flex-col" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

                    {/* navbar */}
                    <div className="flex justify-between px-20 text-white pt-10 mb-5 ">
                        <div>
                            logo
                        </div>
                        <div className="grid grid-cols-6 gap-2 justify-items-center h-auto ">
                            <a href="/" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Home</a>
                            <a href="/projects" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Our projects</a>
                            <a href="/joinus"className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Join us</a>
                            <a href="/about" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">About us</a>
                            <a href="/contact" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Contact</a>
                            <a href="/donate" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Donate</a>

                        </div>
                    </div>

                    <div className="h-full px-20 flex flex-col place-content-center">
                        <div className="text-8xl">
                            <div className="">Help maintain the </div>
                            <div className=" text-blue-500">smile. </div>
                        </div>
                        <div className="w-fit my-10">
                            <button className=" w-fit px-10 py-2 rounded bg-blue-500 hover:bg-blue-400 ">
                                See our projects
                            </button>
                        </div>
                    </div>

                </div>

            </div>



            {/* 2nd part */}
            <div style={{height:"100vh"}}>
                {/* 2A */} 
                <div className="flex flex-col place-items-center h-2/3 w-full">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        What we do 
                    </div>
                    <div className="text-5xl mb-5">
                        Main areas of our focus
                    </div>

                    <div className="grid grid-cols-2 gap-10 p-5 w-auto lg:w-1/2">
                        <div className="flex flex-row">
                            <div className="px-5">
                                <Donate size={50} color="rgba(231,162,50,1)"/>
                            </div>
                            <div> black
                                <div className="font-bold">
                                    Charity
                                </div>
                                <div>
                                    Giving to the needy in the societies to contribute to zero hunger (SDG GOAL 2).
                                </div>
                                    
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="px-5">
                                <Leadership size={60} color="rgba(231,162,50,1)" />
                            </div>
                            <div>
                                <div className="font-bold">
                                    Leadership and empowerment
                                </div>
                                <div>
                                    Training and mentoring youth leaders to impact the society as well as empowering women in STEM
                                </div>

                            </div>
                        </div>
                        
                        <div className="flex flex-row">
                            <div className="px-5">
                                <Technology size={60} color="rgba(231,162,50,1)"/>
                            </div>
                            <div>
                                <div className="font-bold">
                                    Technology
                                </div>
                                <div>
                                    Creating Tech space for youth to leverage technologies for developing their communities.
                                </div>
                                    
                            </div>
                        </div>
                    
                        <div className="flex flex-row">
                            <div className="px-5">
                                <Climate size={50} color="rgba(231,162,50,1)"/>
                            </div>
                            <div>
                                <div className="font-bold">
                                    Climate
                                </div>
                                <div>
                                    Youth sensitization on climate issues. Developing pragmatic measures to mitigate potential impact of climate change as well as empowering the youth to engage in tree planting                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

                {/* 2B */}
                <div className="h-1/3 text-white " style={{backgroundImage: `url(${Mainpic})`, backgroundSize:"cover"}} >
                    <div className="flex h-full flex-col justify-center p-20" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>

                        <div className="text-3xl font-bold">
                            This is our story
                        </div>
                        <div className="py-5">
                            Story content
                        </div>
                        <div className="text-blue-500" >
                            <a href="/about">Read more  </a>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LandingPage;