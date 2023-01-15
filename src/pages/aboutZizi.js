import React, { useState } from 'react'

import Navbar from '../components/navBarResponsive';
import FooterFull from "../components/footer.js"

function Aboutzizi(){



    const [team, setTeam] = useState([
        {id:1, nameofMember:"Dwumfour Abdullai Aziz", roleofMember:""},
        {id:2, nameofMember:"Isaac Adjei", roleofMember:""},
        {id:3, nameofMember:"Aisha Badmus", roleofMember:""},
        {id:4, nameofMember:"Kwame Abladzo", roleofMember:""},
        {id:5, nameofMember:"Mohammed Toffic", roleofMember:""},
        {id:6, nameofMember:"Yakubu Alice", roleofMember:""},
        {id:7, nameofMember:"Christabel Edinam", roleofMember:""},
        {id:8, nameofMember:"Azianogbe Wisdom", roleofMember:""}
    ])




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
                    
                    <img className='object-cover w-full h-64' src={require('../assets/group.JPG')} alt="Zizi Foundation logo"/>
                    
                    <img className='object-contain row-span-2 max-[640px]:row-span-1  h-72' src={require('../assets/less_privileged.jpg')} alt="Zizi Foundation logo"/>                        
            
                    <img className='object-cover w-full h-64' src={require('../assets/group1.JPG')} alt="Zizi Foundation logo"/>                    
        
                </div>


                {/* our team */}
                {/* <div className="flex flex-col place-items-center my-10 border-t">
                    <div  className="text-blue-500 uppercase font-semibold px-5 pt-5">
                        Our team
                    </div>
                    <div className="text-5xl mb-5 font-semibold">
                        Meet the real world heroes
                    </div>


                    {/* make each member's rollcall clickable in the future to lead to their portfolios and social media*/}
                    {/* <div className="grid grid-cols-4 gap-4">
                        {team.map((item)=>{
                            return(

                                <div key={item.id} className='flex flex-col place-items-center'>
                                    <div>
                                        {item.nameofMember} 
                                    </div>
                                </div>


                            )
                        }
                        )} */}
                    {/* </div>
                </div> */}





            </div>

            {/* footer */}
            <FooterFull />



        </div>
    )
}

export default Aboutzizi;