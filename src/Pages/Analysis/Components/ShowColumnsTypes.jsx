/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Text, Badge, Flex, Table } from '@mantine/core'

// for mantine imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

function ShowColumnsTypes() {

    const dataset = useSelector(selectUploadData)

    // state to hold columns types
    const [ columnTypes, setColumnTypes ] = useState([])

    useEffect(() => {
        if(dataset){

            const types = []

            Object.entries(dataset?.columns_type).forEach(([key, value]) => {
                if(value == "str"){
                    types.push({
                        name: key,
                        type: "Contains Both letters and Numbers"
                    })
                } else if(value == "int64"){
                    types.push({
                        name: key,
                        type: "Numbers Only"
                    })
                } else if(value == "float64"){
                    types.push({
                        name: key,
                        type: "Numbers with decimal"
                    })
                } else if(value == "bool"){
                    types.push({
                        name: key,
                        type: "Boolean (True/False)"
                    })
                } else if(value == "datetime64"){
                    types.push({
                        name: key,
                        type: "Date and Time"
                    })
                } else if(value == "object"){
                    types.push({
                        name: key,
                        type: "Contains Text (String)"
                    })
                } else{
                    types.push({
                        name: key,
                        type: value
                    })
                }
            })

            setColumnTypes(types)
        }
    }, [dataset])

    const renderTypes = columnTypes.map((column, index) => (
        <Table.Tr key={ index }>
          <Table.Th w={160}>{column.name}</Table.Th>
          <Table.Td>{column.type}</Table.Td>
        </Table.Tr>
    ))

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
                    {renderTypes}
                </Table.Tbody>
            </Table>
        </div>
    )
}

export default ShowColumnsTypes
