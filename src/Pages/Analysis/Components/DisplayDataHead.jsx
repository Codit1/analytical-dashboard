/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Pagination, Table, Text, TextInput, ActionIcon, NumberFormatter, Button, ScrollArea  } from '@mantine/core';

// for redux imp
import { useSelector } from 'react-redux';
import { selectUploadData } from '@store/uploadDataset';

// for icons imp
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";



function DisplayDataHead() {

    const dataset = useSelector(selectUploadData)

    // state to hold column names
    const [ columnNames, setColumnNames ] = useState([])

    const headers = columnNames.map((col) => (
        <Table.Th key={col}>{col.replaceAll("_", " ")}</Table.Th>
    ));

    // ✅ Rows
    const rows = dataset?.dataset_head.map((row, rowIndex) => (
        <Table.Tr key={rowIndex}>
            {columnNames.map((col) => (
                <Table.Td style={{ minWidth: 220 }} key={col}>
                    {row[col]}
                </Table.Td>
            ))}
        </Table.Tr>
    ));

    useEffect(() => {
        if(dataset){
            setColumnNames(Object.keys(dataset?.dataset_head[0]))
        }
    }, [dataset])

    return (
        <div className='bg-white rounded-md p-2'>

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
                <Pagination total={10} color='#363A38' />
            </div>
        </div>
    )
}

export default DisplayDataHead
