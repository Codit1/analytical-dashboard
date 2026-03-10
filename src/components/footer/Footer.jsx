import React from 'react'

// for mantine imp
import { Text, NavLink } from '@mantine/core'

// for router imp
import { Link } from 'react-router';

// for icons imp
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-[#131315] p-4 mt-4 shadow-md'>
            <div>
                <div className='space-y-2'>
                    <Text ta={"center"} fw={"bold"} c={"white"} fz={"lg"}>DataLens</Text>
                    <Text ta={"center"} fw={"bold"} c={"dimmed"} td={"underline"}>Nathaniel Stephen</Text>
                </div>

                <div className='flex items-center justify-center space-x-4 mt-4'>
                    <Link target="_blank" className='hover:-translate-y-2 duration-100'>
                        <FaGithub size={25} color='#5A5A5C' />
                    </Link>

                    <Link target="_blank" className='hover:-translate-y-2 duration-100'>
                        <FaLinkedin size={25} color='#5A5A5C' />
                    </Link>

                    <Link target="_blank" className='hover:-translate-y-2 duration-100'>
                        <FaFacebook size={25} color='#5A5A5C' />
                    </Link>
                </div>

                <Text ta={"center"} fw={"bold"} c={"white"} mt={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste libero, 
                    esse eum magnam quos saepe blanditiis velit quasi. Quia.
                </Text>
            </div>
        </footer>
    )
}

export default Footer
