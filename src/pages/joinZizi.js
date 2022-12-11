import React from 'react'
import NaviBar from '../components/naviBar';

function Joinzizi(){
    return(
        <div>
            {/* navigation bar */}
            <NaviBar />
            
            
            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div  className="text-blue-500 uppercase font-semibold px-5 pt-5">
                    Volunteer
                </div>
                <div className="text-5xl mb-5 font-semibold">
                    Help the cause
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div>
                            nsjfanfaoinf iowkejsfk ensalkf qfkalnfw lkefilnf ejfifipifif oihfiowefiiohfoiwh ionfiowiiofio
                        </div>

                        {/* volunteer form */}
                            <form className='mt-10'>
                                <div className='flex flex-col mt-5'>
                                    <label>Your name</label>
                                    <input type={'text'} className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Email</label>
                                    <input type={'email'} className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Phone number</label>
                                    <input type={'tel'} className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Message</label>
                                    <textarea maxLength={200} type={'text'} className='border p-1' />
                                </div>

                                <input type={'submit'} className='border mt-5 py-3 px-10 rounded text-white animate-pulse font-medium bg-blue-600 hover:bg-blue-500 cursor-pointer' value={"Become a Hero"}  />
                                
                            </form>

                    </div>


                    <img className='h-fit' src={require('../assets/bgkids.jpg')} alt="Zizi Foundation logo"/>

                </div>
                
            </div>

            {/* footer mini */}
            <section className="bg-gray-200 text-gray-400 w-full flex text-xs place-content-center absolute bottom-0 p-5 mt-10">
                <div>
                    {"\u00A9"} 2022 Zizi Foundation | All rights reserved.
                </div>
            </section>

        </div>
    )
}

export default Joinzizi;