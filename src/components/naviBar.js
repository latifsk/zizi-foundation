import React from 'react'


export default function NaviBar(){
    return(
        <>
            <div className="flex justify-between place-items-center px-5 lg:px-20 pt-5 mb-5 text-xl lg:text-lg md:text-lg ">
                <div style={{justifyContent:'center', alignItems:'center'}} className='w-fit h-fit flex uppercase '>
                    <img className='object-contain h-24 w-28 ' src={require('../assets/Zizi_logo.png')} alt="Zizi Foundation logo"/>
                    Zizi Foundation
                </div>
                <div id="navOptions" className="grid grid-cols-6 gap-1 justify-items-center h-fit w-auto ">
                    <a href="/" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Home</a>
                    <a href="/our_projects" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Projects</a>
                    <a href="/join_us"className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Join us</a>
                    <a href="/about" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">About us</a>
                    <a href="/contact" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Contact</a>
                    <a href="/donate" className="hover:border-blue-500 border-b-2 border-b-transparent hover:border-b-2 cursor-pointer">Donate</a>
                </div>
            </div>
        </>
    )
}