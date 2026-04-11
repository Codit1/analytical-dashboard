import React from 'react'
import { RingProgress, Text, NumberFormatter } from '@mantine/core';

function Infos() {
    return (
        <div className='flex items-center justify-between bg-white py-2 px-4 rounded-md md:w-[40%]'>
            <div className='w-[45%]'>
                <RingProgress
                    size={140}
                    thickness={16}
                    roundCaps
                    sections={[
                        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
                        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
                        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
                    ]}
                />
            </div>

            <div className='space-y-4 w-[55%]'>
                <div className='flex items-center justify-between space-x-8'>
                    <Text fw={"bold"} c={"gray"} size={"md"}>Null Counts:</Text>
                    <NumberFormatter className='font-bold text-lg' value={180} thousandSeparator />
                </div>
                <div className='flex items-center justify-between'>
                    <Text  fw={"bold"} c={"gray"} size={"md"}>Unique Counts</Text>
                    <NumberFormatter className='font-bold text-lg' value={120} thousandSeparator />
                </div>
                <div className='flex items-center justify-between space-x-8'>
                    <Text fw={"bold"} c={"gray"} size={"md"}>Duplicate Counts</Text>
                    <NumberFormatter className='font-bold text-lg' value={1020} thousandSeparator />
                </div>
            </div>
        </div>
    )
}

export default Infos
