import React from 'react'

// for mantine imp
import { Button, TextInput, ActionIcon, Text } from '@mantine/core'

// for comp imp
import ActionBars from './Components/ActionBars'
import ColumnsList from './Components/ColumnsList';
import NullValueInfo from './Components/NullValueInfo';
import UniqueValueInfo from './Components/UniqueValueInfo';
import InfoChartColumnValueCount from './Components/InfoChartColumnValueCount';
import DisplayDataHead from './Components/DisplayDataHead';
import ShowColumnsTypes from './Components/ShowColumnsTypes';
import DisplayColumnValueCount from './Components/DisplayColumnValueCount';

// for icons imp
import { FiSearch } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { MdLensBlur } from "react-icons/md";
import { ImSearch } from "react-icons/im";


function Analysis() {
    return (
        <>

            <section className='min-h-screen '>

                <div className='flex justify-center space-x-2 p-4 xlc:hidden bg-white shadow-md'>
                    <MdLensBlur size={30} stroke='2'/>
                    <h2 className='font-bold text-lg'>
                        <span>Data</span>
                        <span className='text-blue-300 italic'>Lens</span>
                    </h2>
                </div>

                <div className='pt-4'>

                    <div className='flex items-center justify-between px-4'>

                        <Text fw={"bold"} fz={"lg"} c={"black"}>FileName</Text>
                        
                        <div className='flex items-center justify-end space-x-4 pr-2 mdc:w-[50%]'>
                            <TextInput 
                                placeholder='Search'
                                radius={"xl"}
                                width={"60%"}
                                w={{
                                    base: "60%",
                                    sm: "60%",
                                    md: "70%"
                                }}
                            />
                            <div className='space-x-4'>
                                <ActionIcon 
                                    color={"#fff"}
                                    radius={"xl"}
                                >
                                    <ImSearch size={18} stroke='2' color='black'/>
                                </ActionIcon>

                                <ActionIcon
                                    color={"#fff"}
                                    radius={"xl"}
                                >
                                    <TiHome size={20} stroke='2' color='black'/>
                                </ActionIcon>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 px-4'>
                    <ColumnsList/>
                </div>

                <div>
                    <ActionBars/>
                </div>

                <div className='mt-6 px-4 md:space-y-0 space-y-4 md:gap-4 md:grid grid-cols-2'>
                    <NullValueInfo/>
                    <UniqueValueInfo/>
                </div>

                <div className='mt-6 px-4'>
                    <InfoChartColumnValueCount/>
                </div>

                <div className='mt-6 px-4'>
                    <ShowColumnsTypes/>
                </div>

                <div className='mt-6 px-4'>
                    <DisplayColumnValueCount/>
                </div>
                
                <div className='mt-6 px-4'>
                    <DisplayDataHead/>
                </div>
                
            </section>
        </>
    )
}

export default Analysis
