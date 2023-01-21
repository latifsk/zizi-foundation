import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => { 

    const [showMenu, setShow] = React.useState(false)

    return ( 

        <nav className="w-full  items-center navbar">

            <div className="flex items-center w-full justify-between px-4 py-3 bg-transparent" >

                <div className="flex items-center">    
                    <img src={require("../assets/Zizi_logo.png")} alt="Logo" className="h-24 w-24" /> 
                    <span className="font-semibold text-xl tracking-tight  ml-2 navbartext" style={{color:"rgb(231, 162, 50)"}}> Zizi Foundation </span> 
                </div> 
                    
                <div className="block lg:hidden md:hidden max-[700px]:visible sm:hidden"> 
                    <button onClick={()=>{ showMenu === false ? setShow(true) : setShow(false)}} className="flex items-center navbaricon px-3 py-2 border border-white rounded "> 
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> 
                            <title>Menu</title> 
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> 
                        </svg> 
                    </button> 
                </div> 
                
                <div className=" flex  lg:flex lg:items-center lg:w-auto md::flex md:items-center md::w-auto max-[640px]:hidden"> 
                        <nav className="text-sm lg:flex-grow"> 
                            <Link to={"/"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600 mr-4"> Home </Link>
                            <Link to={"/about"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600 mr-4"> About us </Link> 
                            <Link to={"/our_projects"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600 mr-4"> Our Projects </Link> 
                            <Link to={"/join_us"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600 mr-4"> Join us </Link> 
                            <Link to={"/contact"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600 mr-4"> Contact </Link> 
                            <Link to={"/donate"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white-200 hover:text-blue-600"> Donate </Link> 
                            
                        </nav>
                </div> 

            </div>

        {
            showMenu && (
                <nav className="pb-5 text-sm grid grid-rows-6 place-items-center lg:flex-grow min-[700px]: lg:hidden sm:hidden md:hidden bg-white z-30 absolute  w-full "> 
                                
                                <Link to={"/"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500 mr-4">Home</Link>
                                <Link to={"/about"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500 mr-4"> About us </Link> 
                                <Link to={"/our_projects"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500 mr-4"> Our Projects </Link> 
                                <Link to={"/join_us"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500 mr-4"> Join us </Link> 
                                <Link to={"/contact"} className="max-[640px]:block inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500 mr-4">Contact</Link> 
                                <Link to={"/donate"} className="max-[640px]:block items-center inline-block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-black hover:text-blue-500">Donate</Link> 
                                
                </nav>

            )
        }

        </nav>
    ); 
};


export default Navbar;