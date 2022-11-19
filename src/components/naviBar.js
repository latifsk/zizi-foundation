import React from 'react'


export default function NaviBar(){
    return(
        <>
            <div className="flex justify-between px-20 text-white pt-10 mb-5 ">
                        <div className='w-fit h-fit'>
                            <img className='h-24 w-28 lg:w-24 md:w-24 sm:24' src={require('../assets/Zizi_logo.png')} alt="Zizi Foundation logo"/>
                        </div>
                        <div id="navOptions" className="grid grid-cols-6 gap-2 justify-items-center h-auto w-fit text-sm lg:text-xl md:text-base">
                            <a href="/" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Home</a>
                            <a href="/projects" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Projects</a>
                            <a href="/joinus"className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Join us</a>
                            <a href="/about" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">About us</a>
                            <a href="/contact" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Contact</a>
                            <a href="/donate" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Donate</a>

                        </div>
                    </div>
        </>
    )
}