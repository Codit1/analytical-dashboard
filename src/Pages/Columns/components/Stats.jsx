import React from 'react'

// for mantine imp
import { Text, Badge } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux'
import { selectColumnData } from '@store/columns';


function Stats() {

    const columnData = useSelector(selectColumnData)


    return (
        <div className='bg-white py-4 px-6 rounded-md md:w-[50%]'>
            <Text fw={"bold"} fz={"lg"}>Stats</Text>
            <div className='space-y-4 mt-2'>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-md' >Minimum Value</p>
                    <Badge>{columnData?.stats?.min}</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-md' >Maximum Value</p>
                    <Badge>{columnData?.stats?.max}</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-md' >Median Value</p>
                    <Badge>{columnData?.stats?.median}</Badge>
                </div>
                <div className='flex items-center justify-between hover:bg-[#848285] group p-2 rounded-md shadow shadow-slate-400'>
                    <p className='group-hover:text-white font-bold text-md' >Standard Deviation Value</p>
                    <Badge>{(columnData?.stats?.std)?.toFixed(0)}</Badge>
                </div>
            </div>
        </div>
    )
}

export default Stats
