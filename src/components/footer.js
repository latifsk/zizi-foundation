import React from 'react'


export default function FooterFull(){
    return(
        <>
            <footer className="w-full bottom-0">
                <section className=" flex place-content-center" >
                    <div className=" py-10 border-t border-gray-300 flex flex-col place-items-center" style={{width:"70%"}}>
                        <div className="text-blue-500 uppercase font-semibold">
                            What now?
                        </div>
                        <div className="font-extrabold text-4xl mb-10">
                            Support our mission
                        </div>
                        <div className="grid grid-cols-2 gap-10 place-items-center">
                            <a href="donate" className=" px-16 py-3 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">Donate</a>
                            <a href="/join_us" className=" px-16 py-3 border bg-blue-600 rounded text-white hover:bg-blue-500 ">Volunteer</a>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-200 text-gray-400 flex text-xs place-content-center p-5">
                    <div>
                        {"\u00A9"} 2022 Zizi Foundation | All rights reserved.
                    </div>
                </section>
            </footer>
        </>
    )
}