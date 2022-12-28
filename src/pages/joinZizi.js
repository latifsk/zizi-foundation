import React, { useRef } from 'react'
import NaviBar from '../components/naviBar';

import emailjs from '@emailjs/browser';


function Joinzizi(){


    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3izu3vt', 'template_oxsvq9m', form.current, '9EjkNKVteSw_tWC7b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }


    return(
        <div>
            {/* navigation bar */}
            <NaviBar />
            
            
            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div  className="text-blue-500 uppercase font-semibold px-5 pt-4">
                    Volunteer
                </div>
                <div className="text-5xl mb-5 font-semibold">
                    Help the cause
                </div>

                <div className='grid grid-cols-2 gap-5 my-10'>
                    <div className='col-span-2'>

                    <p>
                        Zizifoundation believes that all together, with our spirit of togetherness and benevolence we would be able to make this world a better place.
                    </p>
                    <p>
                        I would like to cease this opportunity to create your indulgence in being a member/Volunteer of this noble organization. I say, welcome everyone on board.
                    </p>
                    </div>

                    <div>

                        {/* volunteer form */}
                            <form  ref={form} onSubmit={sendEmail} className='mt-10'>
                                <div className='flex flex-col mt-5'>
                                    <label>Your name</label>
                                    <input type={'text'} name="user_name" className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Email</label>
                                    <input type={'email'} name="user_email" className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Phone number</label>
                                    <input type={'tel'} name="user_tel" className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Message</label>
                                    <textarea name="user_message" placeholder='Kindly, introduce yourself' maxLength={200} type={'text'} className='border p-1' />
                                </div>

                                <input type={'submit'} className='border mt-5 py-3 px-10 rounded text-white animate-pulse font-medium bg-blue-600 hover:bg-blue-500 cursor-pointer' value={"Become a hero"}  />
                                
                            </form>

                    </div>


                    <img className='h-full mt-10 object-cover' src={require('../assets/join.jpg')} alt="Zizi Foundation logo"/>

                </div>
                
            </div>

            {/* footer mini */}
            <section className="bg-gray-200 text-gray-400 w-full flex text-xs place-content-center p-5 mt-5">
                <div>
                    {"\u00A9"} 2022 Zizi Foundation | All rights reserved.
                </div>
            </section>

        </div>
    )
}

export default Joinzizi;