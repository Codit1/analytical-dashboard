import React from 'react'

// for mantine imp
import { ScrollArea, List, Text, Table } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux';
import { selectColumnData } from '@store/columns';



function UniqueValue() {

    const columnData = useSelector(selectColumnData);

    const rows = columnData?.unique_values?.map((value, indx) => (
        <Table.Tr key={indx}>
            <Table.Td>{indx++}</Table.Td>
            <Table.Td>{value}</Table.Td>
        </Table.Tr>
    ));
    
    return (
        <div className='bg-white p-2 rounded-md md:w-[40%]'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Unique Values</Text>
            <ScrollArea h={250} offsetScrollbars mt={10}>
                <Table highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                        <Table.Th>S/N</Table.Th>
                        <Table.Th>Unique Values</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>

            </ScrollArea>
        </div>
    )
}

export default UniqueValue
