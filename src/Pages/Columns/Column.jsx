import { useEffect } from 'react'

// for mantine imp
import { Button, TextInput, ActionIcon, Text, LoadingOverlay } from '@mantine/core'

// for comp imp
import ActionBars from './components/ActionBars';
import ValueCount from './components/ValueCount';
import TopValues from './components/TopValues';
import Infos from './components/Infos';
import UniqueValue from './components/UniqueValue';
import Stats from './components/Stats';
import Distribution from './components/Distribution';
import Values from './components/Values';

// for react-router imp
import { useNavigate, useSearchParams } from 'react-router';

// for redux imp
import { useSelector, useDispatch } from 'react-redux';
import { getColumns, selectColumnData, selectLoadingColumn } from '@store/columns';

// for icons imp
import { FiSearch } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { MdLensBlur } from "react-icons/md";
import { ImSearch } from "react-icons/im";

function Column() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const columnData = useSelector(selectColumnData)
    const loadingColumn = useSelector(selectLoadingColumn)

    const [searchParams] = useSearchParams()
    const datasetId = searchParams.get("id")
    const columnName = searchParams.get("column")

    useEffect(() => {
        dispatch(getColumns({datasetId, column: columnName}))

    }, [columnName, datasetId, dispatch])

    return (
        <div>

            <LoadingOverlay visible={loadingColumn}/>

            <div onClick={() => navigate(-1)} className='flex justify-center space-x-2 p-4 xlc:hidden bg-white shadow-md cursor-pointer'>
                <MdLensBlur size={30} stroke='2'/>
                <h2 className='font-bold text-lg'>
                    <span>Data</span>
                    <span className='text-blue-300 italic'>Lens</span>
                </h2>
            </div>

            <div className='pt-4'>

                <div className='flex items-center justify-between px-4'>

                    <Text fw={"bold"} fz={"lg"} c={"black"}>{columnName}</Text>
                    
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
                <ValueCount/>
            </div>

            {
                columnData?.dtype == "int64" ?
                <div className='mt-6 px-4 md:space-y-0 space-y-4 md:gap-4 md:flex'>
                    <Stats/>
                    <Distribution/>
                </div> :
                columnData?.dtype == "float64" ?
                <div className='mt-6 px-4 md:space-y-0 space-y-4 md:gap-4 md:flex'>
                    <Stats/>
                    <Distribution/>
                </div> :
                null
            }

            <div className='mt-6 px-4 md:space-y-0 space-y-4 md:gap-4 md:flex'>
                <TopValues/>
                <UniqueValue/>
            </div>

            <div>
                <ActionBars/>
            </div>

            <div className='mt-6 px-4'>
                <Values/>
            </div>
        </div>
    )
}

export default Column
