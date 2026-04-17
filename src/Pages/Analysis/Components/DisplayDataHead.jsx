/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Pagination, Table, Text, LoadingOverlay, NumberFormatter, Button, ScrollArea  } from '@mantine/core';
import { notifications } from '@mantine/notifications';

// for redux imp
import { useSelector, useDispatch } from 'react-redux';
import { selectUploadData } from '@store/uploadDataset';
import { getDatasetPagination, selectDatasetPagination, selectLoadingDatasetPagination } from '@store/pagination';

// for react-router imp
import { useSearchParams } from 'react-router';

// for icons imp
import { FaFilter } from "react-icons/fa";



function DisplayDataHead() {

    const dispatch = useDispatch()

    const dataset = useSelector(selectUploadData)
    const datasetPagination = useSelector(selectDatasetPagination)
    const loading = useSelector(selectLoadingDatasetPagination)

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id')

    // state to hold column names
    const [ columnNames, setColumnNames ] = useState([])

    // state to hold datasets data
    const [ datasetData, setDatasetData ] = useState([])

    const headers = columnNames.map((col) => (
        <Table.Th key={col}>{col.replaceAll("_", " ")}</Table.Th>
    ));

    // ✅ Rows
    const rows = datasetData?.map((row, rowIndex) => (
        <Table.Tr key={rowIndex}>
            {columnNames.map((col) => (
                <Table.Td style={{ minWidth: 220 }} key={col}>
                    {row[col]}
                </Table.Td>
            ))}
        </Table.Tr>
    ));

    // func to handle pagination
    const handlePageChange = (page) => {
        
        const pageData = {
            page: page,
            limit: 100,
            dataset_id: id
        }

        dispatch(getDatasetPagination(pageData)).unwrap()
        .then((res) => {
            setDatasetData(res)
        })
        .catch(err => {
            notifications.show({
                ...err,
                color: "orange"
            })
        })
        
    }

    useEffect(() => {

        setDatasetData(dataset?.dataset_head)

    }, [dataset])

    useEffect(() => {
        if(dataset){
            setColumnNames(Object.keys(dataset?.dataset_head[0]))
        }
    }, [dataset])

    return (
        <div className='bg-white rounded-md p-2'>

            <LoadingOverlay visible={loading}/>

            <div className='flex items-center justify-between px-4 pt-4'>
                <Text fw={"bold"} fz={"lg"}>
                    <NumberFormatter thousandSeparator value={dataset?.total_rows}/> 
                    <span className='text-sm text-[#B4B4B6]'> Data in this Dataset</span>
                </Text>

                <div>
                    <Button 
                        color='#B4B4B6' 
                        leftSection={<FaFilter/>}
                        radius={"md"}
                    >Filter</Button>
                </div>
            </div>

            <div className='mt-4'>

                <ScrollArea h={700}>
                    <Table stickyHeader striped highlightOnHover withTableBorder withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>{headers}</Table.Tr>
                        </Table.Thead>

                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </ScrollArea>
            </div>

            <div className='w-fit mx-auto mt-4'>
                <Pagination 
                    total={(dataset?.total_rows/100).toFixed(0)} 
                    onChange={(value) => {
                        console.log(value)
                        handlePageChange(value)
                    }}
                    color='#363A38' 
                />
            </div>
        </div>
    )
}

export default DisplayDataHead
