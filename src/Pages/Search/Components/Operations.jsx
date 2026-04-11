import { useState } from 'react'

// for mantine imp
import { Button, Tooltip, Grid, Chip, Text, Badge } from '@mantine/core';

// for comp imp
import OperationModal from './OperationModal';

const operationList = [
    {
        name: "Equals",
        operation: "=",
        bothActions: true
    },
    {
        name: "Not Equals",
        operation: "!=",
        bothActions: true
    },
    {
        name: "Greater Than",
        operation: ">",
        bothActions: false
    },
    {
        name: "Less Than",
        operation: "<",
        bothActions: false
    },
    {
        name: "Contains",
        operation: "contains",
        bothActions: true
    },
    {
        name: "Starts With",
        operation: "startsWith",
        bothActions: true
    },
    {
        name: "Ends With",
        operation: "endsWith",
        bothActions: true
    },
    {
        name: "In",
        operation: "in",
        bothActions: 8
    },
    {
        name: "Between",
        operation: "between",
        bothActions: false
    },
    {
        name: "Is Null",
        operation: "is_null",
        bothActions: true
    },
    {
        name: "Is Not Null",
        operation: "not_null",
        bothActions: true
    },
]

function Operations() {


    // state to know they type operations selected
    const [ selectedOperation, setSelectedOperation ] = useState({name: "", type: ""})

    // state to manage OperationModal
    const [ operationModal, setOperationModal ] = useState(false)

    // func to open operation modal
    const openOperationModal = () => {
        setOperationModal(true)
    }

    // func to close operation modal
    const closeOperationModal = () => {
        setOperationModal(false)
    }

    const renderOperations = operationList.map((operation, index) => (
        <Grid.Col span={2} key={index}>
            <Tooltip label={ operation.name } >
                <Button  
                    onClick={ () => {
                        if(operation.bothActions == true){
                            setSelectedOperation({
                                name: operation.name,
                                type: "both"
                            })
                        } else {
                            setSelectedOperation({
                                name: operation.name,
                                type: "one"
                            })
                        }

                        openOperationModal()
                    }}
                    radius={"lg"} 
                    color={"gray"} 
                >{operation.operation}</Button>
            </Tooltip>
        </Grid.Col>
    ))

    return (
        <div className='bg-white p-2 rounded-md'>

            <OperationModal opening={ operationModal } closing={ closeOperationModal } operation={ selectedOperation }/>

            <div>

                <div className='flex items-center justify-between'>
                    <Text fw={"bold"} fz={"lg"}>Operations</Text>

                    <Badge color='gray'>(=) </Badge>
                </div>

                <Grid mt={10}>
                    {/* <Chip.Group> */}
                        {renderOperations}
                    {/* </Chip.Group> */}
                </Grid>
            </div>
        </div>
    )
}

export default Operations
