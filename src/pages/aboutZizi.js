import React from 'react'

import NaviBar from '../components/naviBar';
import FooterFull from "../components/footer.js"

function Aboutzizi(){
    return(
        <div className="">
            <NaviBar />

            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div className="uppercase">
                    Who we are
                </div>

                <div>
                    This is our story
                </div>
                
                <div>
                    Story text
                </div>

                <div className="grid grid-cols-2">
                    <div className="grid grid-rows-2">
                        <div>
                            img1
                        </div>
                        <div> 
                            img2
                        </div>
                    </div>

                    <div>
                        other image
                    </div>

                </div>


                {/* our team */}
                <div className="flex flex-col place-items-center">
                    <div>
                        Our team
                    </div>
                    <div>
                        Meet the real world heroes
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            img
                        </div>
                        <div>
                            img
                        </div>
                        <div>
                            img
                        </div>
                        <div>
                            img
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