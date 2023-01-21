import React from "react";

// data files
import Mainpic from '../assets/bgkids.jpg'
import helping_street_kids from "../assets/helping_street_kids.jpg";
import less1 from "../assets/project_images/less1.jpg";
import less2 from "../assets/project_images/less2.JPG";
import less3 from "../assets/project_images/less3.jpg";
import less4 from "../assets/project_images/less4.jpg";
import clothe1 from "../assets/project_images/clothe1.jpg";
import clothe2 from "../assets/project_images/clothe2.jpg";
import clothe3 from "../assets/project_images/clothe3.jpg";
import clothe4 from "../assets/project_images/clothe4.jpg";
import ramafest1 from "../assets/project_images/ramafest1.jpg";
import ramafest2 from "../assets/project_images/ramafest2.jpg";
import ramafest3 from "../assets/project_images/ramafest3.jpg";
import ramafest4 from "../assets/project_images/ramafest4.jpg";
import less_privileged from "../assets/less_privileged.jpg";
import group from "../assets/group_zizi.jpg";
import gifts from "../assets/gift.jpg";

// components
import Navbar from "../components/navBarResponsive";
import FooterFull from "../components/footer";
import Project from "../components/project";


// icons
import {BiDonateHeart as Donate} from "react-icons/bi"
import {GiMicrochip as Technology} from "react-icons/gi"
import {GiTrophiesShelf as Leadership} from "react-icons/gi"
import {TiWeatherPartlySunny as Climate} from "react-icons/ti"
import {MdOutlineEmojiFoodBeverage as Food} from "react-icons/md"
import Support from "../components/support";
import Copyright from "../components/copyright";


function LandingPage(){
 

    return(
        <div>
            {/* first page */}
            <div id="home_container mb-10" style={{backgroundImage: `url(${helping_street_kids})`, backgroundSize:"cover", height:"100vh", color:"white" }}>
            
           
           
                <div  className="h-full flex flex-col" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

                    {/* navbar */}
                    <Navbar />



                    {/* body of page */}
                    <div className="h-full px-20 w-auto flex flex-col place-content-center">
                        <div className="text-8xl">
                            <div className="sm:text-5xl max-[400px]:text-2xl">Help maintain the </div>
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
                <div className="flex flex-col place-items-center p-10 w-full">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        What we do 
                    </div>
                    <div className="text-5xl font-semibold mb-5">
                        Main areas of our focus
                    </div>

                    <div className="grid grid-cols-2 gap-10 p-5 w-auto sm:grid-cols-1 max-[640px]:grid-cols-1 ">
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
                <div className=" text-white " style={{backgroundImage: `url(${Mainpic})`, backgroundPosition:"10% 0%", backgroundSize:"cover"}} >
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
                <div className=" flex flex-col place-items-center justify-between p-15 pb-10">
                    <div className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        How we help 
                    </div>
                    <div className="text-4xl font-extrabold mb-5">
                       Current projects
                    </div>

                    <div className="grid grid-cols-3 gap-10 w-auto p-20 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 max-[640px]:grid-cols-1 ">
                        {/* {projectHighlight.slice(0,4).map((item)=>{

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
                            

                        })} */}

                        <Project
                            img={less_privileged}
                            title="Reaching out to the less privileged"
                            date={"November, 2020"}
                            description={
                            "On this fateful occasion, the CEO in collaboration with Zizifoundation donated to an orphanage home(Echoing Hill Village) at Madina."
                            }
                            thePhotos={less_privileged}
                            img1={less1}
                            img2={less2}
                            img3={less3}
                            img4={less4}
                        />

                        <Project
                            img={group}
                            title="Clothing the orphans"
                            date={"June, 2021"}
                            description={
                                "This event was slated by the Zizi foundation to reach out and donate clothes and footwears to the orphanage."
                            }
                            img1={clothe1}
                            img2={clothe2}
                            img4={clothe4}
                            img3={clothe3}
                            />
                            <Project
                            img={gifts}
                            title="RamaFest"
                            date={"April, 2022"}
                            description={
                                "Zizifoundation believes that giving/ sharing a little we have with the society would help to bring a positive change."
                            }
                            img2={ramafest2}
                            img3={ramafest3}
                            img4={ramafest4}
                            img1={ramafest1}
                        />

                        

                    </div>
                    
                    {/* see projects button */}
                    <div>
                        <a href="/our_projects" className="border border-blue-600 px-10 py-2 rounded hover:bg-blue-600 hover:text-white">See all projects</a>
                    </div>
                </div>


                {/* footer */}
                <Support/>


              
            </div>

        </div>
    )
}

export default LandingPage;