import React from 'react'

// for mantine imps
import { Button, Divider } from '@mantine/core'

// for router imp
import { useNavigate } from 'react-router';

// for icons imp
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdLensBlur } from "react-icons/md";

function SideMenu() {

    const navigate = useNavigate();

    return (
        <div className='max-xlc:hidden w-95 bg-white'>
            
            <div onClick={() => navigate(-1)} className='flex justify-center space-x-2 p-4 border-b border-slate-400 cursor-pointer'>
                <MdLensBlur size={30} stroke='2'/>
                <h2 className='font-bold text-lg'>
                    <span>Data</span>
                    <span className='text-blue-300 italic'>Lens</span>
                </h2>
            </div>
            
            <div className='flex flex-col justify-between w-full h-[85%] px-6 pt-4'>
                <div className='block space-y-4'>
                    <div className='flex space-x-2 items-center w-[90%] mx-auto'>
                        <Button variant='outline' color='gray' fullWidth>Home</Button>
                    </div>

                </div>


                <Button color='orange' leftSection={ <MdOutlineClose/> }>Clear</Button>
            </div>
        </div>
    )
}

export default SideMenu
