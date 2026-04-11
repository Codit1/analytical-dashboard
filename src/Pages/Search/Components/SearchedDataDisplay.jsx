import React from 'react'

// for mantine imp
import { Pagination, Table, Text, TextInput, ActionIcon, NumberFormatter, Button  } from '@mantine/core';

// for icons imp
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function SearchedDataDisplay() {

    const rows = elements.map((element, index) => (
        <Table.Tr key={index}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className='bg-white rounded-md p-2'>

            <div>
                <Text fw={"bold"} fz={"lg"}>
                    <NumberFormatter thousandSeparator value={100000}/> 
                    <span className='text-sm text-[#B4B4B6]'> Data in this Dataset</span>
                </Text>
            </div>

            <div className='overflow-scroll h-100 mt-4'>
                <Table 
                    stickyHeader 
                    // stickyHeaderOffset={60}
                    withTableBorder
                    withColumnBorders
                    highlightOnHover 
                >
                    <Table.Thead>
                        <Table.Tr>
                        <Table.Th>Element position</Table.Th>
                        <Table.Th>Element name</Table.Th>
                        <Table.Th>Symbol</Table.Th>
                        <Table.Th>Atomic mass</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>

            <div className='w-fit mx-auto mt-4'>
                <Pagination total={10} color='#363A38' />
            </div>
        </div>
    )
}

export default SearchedDataDisplay
