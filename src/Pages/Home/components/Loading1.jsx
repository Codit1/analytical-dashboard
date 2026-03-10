import React from 'react'

// for mantine imp
import { Skeleton, Text, Table } from '@mantine/core'

function Loading1() {

    const rows = Array.from({ length: 10 }).fill(0).map((_, i) => (
        <Table.Tr key={i} className='cursor-pointer'>
            
            <Table.Td>
                <Text c={"dimmed"} fw={"bold"} fz={"xs"}>Loading...</Text>
            </Table.Td>

            <Table.Td>
                <Text c={"dimmed"} fw={"bold"} fz={"xs"}>Loading...</Text>
            </Table.Td>

            <Table.Td>
                <Text c={"dimmed"} fw={"bold"} fz={"xs"}>Loading...</Text>
            </Table.Td>

            <Table.Td>
                <Text c={"dimmed"} fw={"bold"} fz={"xs"}>Loading...</Text>
            </Table.Td>
            <Table.Td>
                <Text c={"dimmed"} fw={"bold"} fz={"xs"}>Loading...</Text>
            </Table.Td>

        </Table.Tr>
    ));

    const ths = (
        <Table.Tr>
            <Table.Th c={"white"}>S/N</Table.Th>
            <Table.Th c={"white"}>
                <Text>....</Text>
            </Table.Th>
            <Table.Th c={"white"}>
                <Text>....</Text>
            </Table.Th>
            <Table.Th c={"white"}>
                <Text>....</Text>
            </Table.Th>
            <Table.Th c={"white"}>
                <Text>....</Text>
            </Table.Th>
            
            
        </Table.Tr>
    );

    return (
        <div className='rounded-md border border-[#5A5A5C] p-4 mt-8 shadow-sm shadow-[#5A5A5C]'>
            <div>
                <Text c={"white"} fw={"bold"}>... Total</Text>
                
                <Table >
                    <Table.Thead>{ths}</Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>
        </div>
    )
}

export default Loading1
