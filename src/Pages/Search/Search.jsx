import { useState } from 'react'

// for mantine imp
import { Button, TextInput, ActionIcon, Text } from '@mantine/core'

// for comp imp
import SearchType from './Components/SearchType';
import ColumnsList from './Components/ColumnsList';
import Operations from './Components/Operations';
import SearchedDataDisplay from './Components/SearchedDataDisplay';

// for react-router imp
import { useNavigate } from 'react-router';

// for icon imp
import { FiSearch } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { MdLensBlur } from "react-icons/md";
import { ImSearch } from "react-icons/im";



function Search() {

    const navigate = useNavigate()

    // state for column list modal 
    const [ columnListModal, setColumnListModal ] = useState(false)

    // func to open column list modal
    const openColumnListModal = () => setColumnListModal(true)

    // func to close column list modal
    const closeColumnListModal = () => setColumnListModal(false)

    return (
        <div>

            <ColumnsList opened={ columnListModal } closing={ closeColumnListModal }/>

            <div onClick={() => navigate(-1)} className='flex justify-center space-x-2 p-4 xlc:hidden bg-white shadow-md cursor-pointer'>
                <MdLensBlur size={30} stroke='2'/>
                <h2 className='font-bold text-lg'>
                    <span>Data</span>
                    <span className='text-blue-300 italic'>Lens</span>
                </h2>
            </div>

            <div className='pt-4'>
            
                <div className='flex items-center justify-between px-4'>

                    <Text fw={"bold"} fz={"lg"} c={"black"}>Column Name</Text>
                    
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
                <SearchType openColumnList={ openColumnListModal }/>
            </div>

            <div className='mt-6 px-4'>
                <Operations/>
            </div>

            <div className='mt-6 px-4'>
                <SearchedDataDisplay/>
            </div>

        </div>
    )
}

export default Search
