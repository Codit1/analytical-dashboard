import React from 'react'

// for mantine imp
import { Pagination, Table, Text, Button, NativeSelect, ScrollArea, ActionIcon, NumberFormatter, TextInput } from '@mantine/core'

// for icons imp
import { ImSearch } from "react-icons/im";
import { FaFilter } from "react-icons/fa";

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Values() {

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        </Table.Tr>
    ));
    return (
        <div className='bg-white rounded-md p-2'>
            <div>

                <div className='flex items-center justify-between'>
                    <Text fw={"bold"} fz={"md"} >Column Data</Text>
                    <Text fw={"bold"} fz={"md"}>
                        <span>Total: </span>
                        <NumberFormatter thousandSeparator value={10000}/>
                    </Text>
                </div>

                <div className='flex items-end justify-between mt-4 px-6'>
                    <div className='flex items-end space-x-4 w-[50%]'>
                        <TextInput
                            label={"Search Column"}
                            placeholder='search anything'
                            radius={"xl"}
                            w={"60%"}
                        />

                        <ActionIcon 
                            color={"#B4B4B6"}
                            radius={"xl"}
                        >
                            <ImSearch size={18} stroke='2' color='black'/>
                        </ActionIcon>
                    </div>

                    <div>
                        <Button 
                            color='#B4B4B6' 
                            leftSection={<FaFilter/>}
                            radius={"md"}
                        >Filter</Button>
                    </div>
                </div>

                <div className='mt-4'>
                    <ScrollArea h={300} offsetScrollbars >
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

                <div className='w-fit mx-auto mt-4'>
                    <Pagination total={10} color='#363A38' />
                </div>
            </div>
        </div>
    )
}

export default Values
