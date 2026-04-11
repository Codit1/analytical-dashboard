import React from 'react'

// for mantine imo
import { Text, NumberFormatter } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

function ActionBars() {

    const data = useSelector(selectUploadData)

    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 px-4 mt-6' >
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Total rows</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={data?.total_rows} thousandSeparator />
                </p>
                {/* <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} mt={"5px"}>Name of Coulmn</Text> */}
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Total Column</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={data?.total_columns} thousandSeparator />
                </p>
                <div className='flex items-end space-x-2'>
                    <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} >Total Columns Value</Text>
                    <Text ml={10} fw={"bold"} c={"black"}>
                        <NumberFormatter value={data?.total_no_value_columns} thousandSeparator />
                    </Text>
                </div>
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Total Duplicate</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={data?.no_duplicate} thousandSeparator />
                </p>
                <div className='flex items-end space-x-2'>
                    <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} >Total Unique Values</Text>
                    <Text ml={10} fw={"bold"} c={"black"}>
                        <NumberFormatter value={data?.total_no_unique} thousandSeparator />
                    </Text>
                </div>
            </div>
            
            <div className='bg-white rounded-xl ring ring-slate-200 px-4 py-2 hover:bg-[#3A3737] shadow-md group'>
                <span className='group-hover:text-white group-hover:font-light text-sm text-[#B4B4B6] font-bold'  >Total nulls</span>
                <p className='group-hover:text-white text-lg mt-2 text-black font-bold' >
                    <NumberFormatter value={data?.total_nulls} thousandSeparator />
                </p>
                <div className='flex items-end space-x-2'>
                    <Text fw={"bold"} c={"#B4B4B6"} fz={"xs"} >Null percentage</Text>
                    <Text ml={10} fw={"bold"} c={"black"}>{data?.null_percentage}%</Text>
                </div>
            </div>
            
        </div>
    )
}

export default ActionBars
