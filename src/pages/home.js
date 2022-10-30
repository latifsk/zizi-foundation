import React from "react";


import Mainpic from '../assets/smilingkids.jpg'


function LandingPage(){


    return(
        <div>
            {/* first page */}
            <div className="flex justify-between px-20 text-white pt-10" style={{backgroundImage: `url(${Mainpic})`, backgroundSize:"cover", height:"100vh" }}>
                <div>
                    logo
                </div>
                <div className="grid grid-cols-5 gap-2 justify-items-center h-fit">
                    <p className="hover:border-blue-500 hover:border-b-2 cursor-pointer">Home</p>
                    <p className="hover:border-blue-500 hover:border-b-2 cursor-pointer">About us</p>
                    <p className="hover:border-blue-500 hover:border-b-2 cursor-pointer">Join us</p>
                    <p className="hover:border-blue-500 hover:border-b-2 cursor-pointer">Our projects</p>
                    <p className="hover:border-blue-500 hover:border-b-2 cursor-pointer">Donate</p>

                </div>
            </div>

            {/* lower part */}
            <div>
                lfmlf
            </div>
        </div>
    )
}

export default LandingPage;