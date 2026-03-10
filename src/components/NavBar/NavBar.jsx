// import { useState } from 'react'

// for styles imp

// for mantine imp
import { TextInput, Button, Drawer, ActionIcon } from '@mantine/core';

// for router imp
import { Link } from 'react-router';

// for react icons import 
import { MdDashboard } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {


    return (
        <nav className='p-4 border-b border-[#5A5A5C]'>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='flex items-center space-x-2'>
                        
                        <MdDashboard size={22} color='white'/>

                        <span className='text-md font-bold text-white'>DashBoard</span>
                    </div>

                    
                </div>

                <div className='flex items-center space-x-2'>
                    <TextInput
                        leftSection={<IoMdSearch />}
                        placeholder='Search anything'
                        h={"35px"}
                        styles={{
                            input: {
                                backgroundColor: "#5A5A5C",
                                borderColor: "#5A5A5C",
                                color: "white",
                                // borderRadius: "15px",
                            },
                        }}
                    />

                    <Button h={"35px"} color='#5A5A5C' rightSection={ <IoMdAdd/> }>Add</Button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
