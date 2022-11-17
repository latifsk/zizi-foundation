import React from "react";


import Mainpic from '../assets/bgkids.jpg'


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
                        <div id="navOptions" className="grid grid-cols-6 gap-2 justify-items-center h-auto">
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


{/* ================================================================================================================================== */}
            {/* 2nd part */}
            <div style={{height:"100vh"}}>
                {/* page 2 part A  */} 
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
                            <div>
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

                {/* page 2 part B */}
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


{/* ================================================================================================================================== */}

            {/* 3rd part */}
            <div style={{height:"100vh"}}>

                  {/* page 3 part A */}
                  <div className="h-1/4 text-white text-left " >
                    <div className="flex h-full text-sm  flex-row justify-between p-20 lg:justify-around" style={{backgroundColor:"rgba(231,162,50,0.2)"}}>

                        {/* box of elements on each column for completed projects counter **remember to match project count in all categories */}
                        <div className="">
                            <div className="font-extrabold  text-5xl text-black">
                                8
                            </div>
                            <div className="font-medium uppercase text-xs text-blue-500">
                                Completed Projects
                            </div>
                            {/* <div>
                                Completed Projects
                            </div> */}
                            
                        </div>

                        {/* column for volunteer count */}
                        <div className="">
                            <div className="font-extrabold text-5xl text-black">
                                126
                            </div>
                            <div className="font-medium uppercase text-xs text-blue-500">
                                Volunteers
                            </div>
                            {/* <div>
                                Completed Projects
                            </div> */}
                            
                        </div>

                        {/* column for to-be-determined entity */}
                        <div className="">
                            <div className="font-extrabold text-5xl text-black">
                                7
                            </div>
                            <div className="font-medium uppercase text-xs text-blue-500">
                                Sponsors
                            </div>
                            {/* <div>
                                Completed Projects
                            </div> */}
                            
                        </div>

                    </div>
                </div>


                {/* page 3 part B */} 
                <div className="flex flex-col place-items-center h-3/4 w-full pb-10">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        How we help 
                    </div>
                    <div className="text-4xl font-extrabold mb-5">
                       Current projects
                    </div>

                    <div className="grid grid-cols-4 gap-10 p-20 w-auto lg:w-1/2">
                        <div className="flex flex-col">
                            <div>
                                Pic
                            </div>
                            <div>
                                title
                            </div>
                            <div>
                                date
                            </div>
                            <div>
                                Summary
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div>
                                Pic
                            </div>
                            <div>
                                title
                            </div>
                            <div>
                                date
                            </div>
                            <div>
                                Summary
                            </div>
                        </div>
                        
                        <div className="flex flex-col">
                            <div>
                                Pic
                            </div>
                            <div>
                                title
                            </div>
                            <div>
                                date
                            </div>
                            <div>
                                Summary
                            </div>
                        </div>
                    
                        <div className="flex flex-col">
                            <div>
                                Pic
                            </div>
                            <div>
                                title
                            </div>
                            <div>
                                date
                            </div>
                            <div>
                                Summary 
                            </div>
                        </div>
                        

                    </div>
                    
                    {/* see projects button */}
                    <div>
                        <button className="border border-blue-600 px-10 py-2 rounded hover:bg-blue-600 hover:text-white">See all projects</button>
                    </div>
                </div>


                {/* footer */}
                <footer className="w-full">
                    <section className=" flex place-content-center" >
                        <div className=" py-10 border-t border-gray-300 flex flex-col place-items-center" style={{width:"70%"}}>
                            <div className="text-blue-500 uppercase font-semibold">
                                What now?
                            </div>
                            <div className="font-extrabold text-4xl mb-10">
                                Support our mission
                            </div>
                            <div className="grid grid-cols-2 gap-10 place-items-center">
                                <button className=" px-16 py-3 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">Donate</button>
                                <button className=" px-16 py-3 border bg-blue-600 rounded text-white hover:bg-blue-500 ">Volunteer</button>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-200 text-gray-400 flex text-xs place-content-center p-5">
                        <div>
                            {"\u00A9"} 2022 Zizi Foundation | All rights reserved.
                        </div>
                    </section>
                </footer>



              
            </div>

        </div>
    )
}

export default LandingPage;