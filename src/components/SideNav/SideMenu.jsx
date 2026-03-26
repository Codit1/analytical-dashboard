import React from 'react'

// for mantine imps
import { Button, NavLink } from '@mantine/core'

// for router imp
import { Link } from 'react-router';

// for icons imp
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { MdLensBlur } from "react-icons/md";

function SideMenu() {
    return (
        <div className='max-xlc:hidden w-95 bg-white'>
            
            <div className='flex justify-center space-x-2 p-4 border-b border-slate-400'>
                <MdLensBlur size={30} stroke='2'/>
                <h2 className='font-bold text-lg'>
                    <span>Data</span>
                    <span className='text-blue-300 italic'>Lens</span>
                </h2>
            </div>
            
            <div className='flex flex-col justify-between w-full h-full py-10'>
                <div className='block space-y-4'>
                    <div className='flex space-x-2 items-center w-[90%] mx-auto border-l-2 border-l-white p-2 font-bold text-md text-black cursor-pointer hover:bg-[#5A5A5C] duration-100 hover:border hover:rounded-md ease-in'>
                        <FaHome/>
                        <span>Home</span>
                    </div>
                    
                </div>


                <Button color='orange' leftSection={ <MdOutlineClose/> }>Clear</Button>
            </div>
        </div>
    )
}

export default SideMenu
