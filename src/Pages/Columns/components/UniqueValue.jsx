import React from 'react'

// for mantine imp
import { ScrollArea, List, Text, Table } from '@mantine/core'

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function UniqueValue() {

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        </Table.Tr>
    ));
    
    return (
        <div className='bg-white p-2 rounded-md md:w-[40%]'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Unique Values</Text>
            <ScrollArea h={250} offsetScrollbars mt={10}>
                <Table highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                        <Table.Th>Element position</Table.Th>
                        <Table.Th>Element name</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>

            </ScrollArea>
        </div>
    )
}

export default UniqueValue
