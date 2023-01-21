import React, { useRef, useState } from 'react'
import Navbar from '../components/navBarResponsive';

import emailjs from '@emailjs/browser';


function Joinzizi(){


    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_dxcm8fh', 'template_oxsvq9m', form.current, '9EjkNKVteSw_tWC7b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setUser("");
        setNum("")
        setMail("");
        setMessage("");
        
    }



    const [username, setUser] = useState("");
    const [usermail, setMail] = useState("");
    const [usernum, setNum] = useState();
    const [usermessage, setMessage] = useState("");


    return(
        <div>
            {/* navigation bar */}
            <Navbar />
            
            {/* main body */}
            <div className="px-20 flex flex-col place-items-center">
                <div  className="text-blue-500 uppercase font-semibold px-5 pt-4">
                    Volunteer
                </div>
                <div className="text-5xl mb-5 font-semibold">
                    Help the cause
                </div>

                <div className='w-full flex flex-col justify-center items-center p-5'>
                    <div className='col-span-2'>

                        <p>
                            Zizifoundation believes that all together, with our spirit of togetherness and benevolence we would be able to make this world a better place.
                        </p>
                        <br />
                        <p>
                            I would like to cease this opportunity to create your indulgence in being a member/Volunteer of this noble organization. I say, welcome everyone on board.
                        </p>
                    </div>


<div className='my-10 grid grid-cols-2 gap-10 max-[640px]:grid-cols-1 w-full'>

                    <img className='h-full mt-10 object-cover' src={require('../assets/join.jpg')} alt="Zizi Foundation logo"/>
                    
                    <div className=''>

                        {/* volunteer form */}
                            <form  ref={form} onSubmit={sendEmail} className='w-full mt-10'>
                                <div className='flex flex-col mt-5'>
                                    <label>Name</label>
                                    <input type={'text'} placeholder="Your full name" name="user_name" value={username} onChange={(ev)=>{setUser(ev.target.value) }} className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Email</label>
                                    <input type={'email'} placeholder="example: ziziuser@gmail.com" name="user_email" className= 'border p-1'  value={usermail} onChange={(ev)=>{setUser(ev.target.value) }} />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Phone number</label>
                                    <input type={'tel'} placeholder="example: 0542345678, +233272345678 etc." name="user_tel" value={usernum} onChange={(ev)=>{setUser(ev.target.value) }} className='border p-1' />
                                </div>

                                <div className='flex flex-col mt-5'>
                                    <label>Message</label>
                                    <textarea name="user_message" placeholder='Kindly, briefly introduce yourself...' maxLength={1500} type={'text'} className='border p-1 max-h-96' value={usermessage} onChange={(ev)=>{setUser(ev.target.value) }} />
                                </div>

                                <input type={'submit'} className='border mt-5 py-3 px-10 rounded text-white animate-pulse font-medium bg-blue-400 hover:animate-none hover:bg-blue-700 cursor-pointer' value={"Become a hero"}  />
                                
                            </form>

                    </div>




</div>
                   

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