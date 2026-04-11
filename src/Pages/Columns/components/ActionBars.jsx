import React from 'react'

// for mantine imo
import { Text, NumberFormatter } from '@mantine/core'

function ActionBars() {
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 px-4 mt-6' >
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Daily Revenue</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={1000} thousandSeparator />
                </p>
                <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text>
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Daily Revenue</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={1000} thousandSeparator />
                </p>
                <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text>
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Daily Revenue</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={1000} thousandSeparator />
                </p>
                <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text>
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Daily Revenue</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={1000} thousandSeparator />
                </p>
                <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text>
            </div>
            
        </div>
    )
}

export default ActionBars
