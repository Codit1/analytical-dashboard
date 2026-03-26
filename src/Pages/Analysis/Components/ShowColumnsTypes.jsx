import React from 'react'

// for mantine imp
import { Text, Badge, Flex, Table } from '@mantine/core'

function ShowColumnsTypes() {


    return (
        <div className='p-2 bg-white rounded-md'>

            <Text fw={"bold"}>Columns Data Types</Text>

            <Table 
                mt={10} 
                variant="vertical" 
                layout="fixed" 
                withTableBorder
                withColumnBorders
                highlightOnHover 
            >
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Th w={160}>Epic name</Table.Th>
                        <Table.Td>7.x migration</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Status</Table.Th>
                    <Table.Td>Open</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Total issues</Table.Th>
                    <Table.Td>135</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Total story points</Table.Th>
                    <Table.Td>874</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Last updated at</Table.Th>
                    <Table.Td>September 26, 2024 17:41:26</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
                </Table>
        </div>
    )
}

export default ShowColumnsTypes
