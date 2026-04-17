import React from 'react'

// for mantine imo
import { Text, NumberFormatter } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux';
import { selectColumnData } from '@store/columns';

function ActionBars() {

    const columnData = useSelector(selectColumnData);

    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 px-4 mt-6' >
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'>Total Values</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={columnData?.total_values} thousandSeparator />
                </p>
                {/* <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text> */}
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Unique Values</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={columnData?.unique_values_count} thousandSeparator />
                </p>
                {/* <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text> */}
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Null/Empty Count</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={columnData?.null_count} thousandSeparator />
                </p>
                {/* <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text> */}
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'>Duplicate Count</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={columnData?.duplicate_counts} thousandSeparator />
                </p>
                {/* <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text> */}
            </div>
            
        </div>
    )
}

export default ActionBars
