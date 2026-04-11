import React from 'react'

// for mantine imp
import { Text, Badge } from '@mantine/core'

function Stats() {
    return (
        <div className='bg-white py-2 px-6 rounded-md md:w-[50%]'>
            <Text fw={"bold"} fz={"md"}>Stats</Text>
            <div className='space-y-4 mt-4'>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-lg' >Min Value</p>
                    <Badge>20</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-lg' >Min Value</p>
                    <Badge>20</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-lg' >Min Value</p>
                    <Badge>20</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-lg' >Min Value</p>
                    <Badge>20</Badge>
                </div>
            </div>
        </div>
    )
}

export default Stats
