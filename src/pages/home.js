import React from "react";


import Mainpic from '../assets/bgkids.jpg'
import helping_street_kids from "../assets/helping_street_kids.jpg";


import Navbar from "../components/navBarResponsive";
import FooterFull from "../components/footer";


import {BiDonateHeart as Donate} from "react-icons/bi"
import {GiMicrochip as Technology} from "react-icons/gi"
import {GiTrophiesShelf as Leadership} from "react-icons/gi"
import {TiWeatherPartlySunny as Climate} from "react-icons/ti"
import {MdOutlineEmojiFoodBeverage as Food} from "react-icons/md"


import {projectHighlight} from "../datasets/projectData.js"

function LandingPage(){
 

    return(
        <div>
            {/* first page */}
            <div id="home_container mb-10" style={{backgroundImage: `url(${helping_street_kids})`, backgroundSize:"cover", height:"100vh", color:"white" }}>
            
           
           
                <div  className="h-full flex flex-col" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

                    {/* navbar */}
                    <Navbar />



                    {/* body of page */}
                    <div className="h-full px-20 flex flex-col place-content-center">
                        <div className="text-8xl">
                            <div className="sm:text-3xl">Help maintain the </div>
                            <div className=" text-blue-500">smile. </div>
                        </div>
                        <div className="w-fit my-10">
                            <a href="/our_projects" className=" w-fit px-10 py-2 rounded bg-blue-500 hover:bg-blue-400 ">
                                See our projects
                            </a>
                        </div>
                    </div>

                </div>

            </div>


{/* ================================================================================================================================== */}
            {/* 2nd part */}
            <div >
                {/* page 2 part A  */} 
                <div className="flex flex-col place-items-center h-2/3 w-full">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        What we do 
                    </div>
                    <div className="text-5xl font-semibold mb-5">
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
                                <Technology size={50} color="rgba(231,162,50,1)"/>
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

                         <div className="flex flex-row">
                            <div className="px-5">
                                <Food size={50} color="rgba(231,162,50,1)"/>
                            </div>
                            <div>
                                <div className="font-bold">
                                    Food security
                                </div>
                                <div>
                                    Offer mentoring programs that support and empower youth in agriculture as well as farmer education and training.
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

                {/* page 2 part B */}
                <div className="h-1/3 text-white " style={{backgroundImage: `url(${Mainpic})`, backgroundPosition:"10% 0%", backgroundSize:"cover"}} >
                    <div className="flex h-full flex-col justify-center p-20" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>

                        <div className="text-3xl font-bold">
                            This is our story
                        </div>
                        <div className="py-5">
                            Zizifoundation is a philanthropic grassroot non-profit organization based in Accra-Ghana. Through philanthropy and solidarity, we partner other local organizations to implement grassroot social interventions that seek to support the less privileged in society...
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


                {/* page 3 part B */} 
                <div style={{height:"100vh"}} className=" bg-slate-300 flex flex-col place-items-center justify-between p-15 pb-10">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        How we help 
                    </div>
                    <div className="text-4xl font-extrabold mb-5">
                       Current projects
                    </div>

                    <div className="grid grid-cols-3 gap-10 w-auto px-20 lg:w-1/2">
                        {projectHighlight.slice(0,4).map((item)=>{

                                return (
                                    <div key={item.title} className="flex flex-col">
                                        <img src={item.imgUrl} alt={"project higlights"} />
                                        <div>
                                            {item.title}
                                        </div>
                                        <div>
                                            {item.date}
                                        </div>
                                        <div>
                                            {item.summaryText}
                                        </div>
                                    </div>
    
                                )
                            

                        })}

                        

                    </div>
                    
                    {/* see projects button */}
                    <div>
                        <a href="/our_projects" className="border border-blue-600 px-10 py-2 rounded hover:bg-blue-600 hover:text-white">See all projects</a>
                    </div>
                </div>


                {/* footer */}
                <FooterFull />



              
            </div>

        </div>
    )
}

export default LandingPage;