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

function SideMenu() {
    return (
        <div className='max-xlc:hidden w-95 bg-[#151517] border-r border-slate-300'>
            <div className='flex flex-col justify-between w-full h-full py-10'>
                <div className='block space-y-4'>
                    <div className='flex space-x-2 items-center w-[90%] mx-auto border-l-2 border-l-white p-2 font-bold text-md text-white cursor-pointer hover:bg-[#5A5A5C] duration-100 hover:border hover:rounded-md ease-in'>
                        <FaHome/>
                        <span>Home</span>
                    </div>
                    <div className='flex space-x-2 items-center w-[90%] mx-auto border-l-2 border-l-white p-2 font-bold text-md text-white cursor-pointer hover:bg-[#5A5A5C] duration-100 hover:border hover:rounded-md ease-in'>
                        <MdDashboard/>
                        <span>Dashboard</span>
                    </div>
                    <div className='flex space-x-2 items-center w-[90%] mx-auto border-l-2 border-l-white p-2 font-bold text-md text-white cursor-pointer hover:bg-[#5A5A5C] duration-100 hover:border hover:rounded-md ease-in'>
                        <MdOutlineFileUpload/>
                        <span>Upload</span>
                    </div>
                </div>


                <Button color='orange' leftSection={ <MdOutlineClose/> }>Clear</Button>
            </div>
        </div>
    )
}

export default SideMenu
