import React from 'react'

// for mantine imp
import { ScrollArea, Text, Table  } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux';
import { selectColumnData } from '@store/columns';

function Distribution() {

    const columnData = useSelector(selectColumnData);

    const rows = columnData?.distribution?.map((distribution, index) => (
        <Table.Tr key={index}>
            <Table.Td>{distribution.range}</Table.Td>
            <Table.Td>{distribution.count}</Table.Td>
        </Table.Tr>
    ));




    return (
        <div className='bg-white p-2 rounded-md md:w-[50%]'>
            <Text fw={"bold"} fz={"md"}>Distribution</Text>
            <div>
                <ScrollArea h={200} offsetScrollbars mt={10}>
                    <Table highlightOnHover withTableBorder withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Range</Table.Th>
                                <Table.Th>Count</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
    
                </ScrollArea>
            </div>
        </div>
    )
}

export default Distribution
