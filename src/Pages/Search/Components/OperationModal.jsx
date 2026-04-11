import React from 'react'

// for mantine import
import { Modal, TextInput, Badge, Button, Text } from '@mantine/core'

function OperationModal({ opening, closing, operation }) {
    return (
        <>
            <Modal
                opened={opening}
                onClose={closing}
                title="Operation Modal"
                size="md"
                centered
            >
                <div className='flex items-center'>
                    <Text fw={"bold"} fz={"sm"}>Operation:</Text>
                    <Badge ml={10} color='gray'>{operation?.name}</Badge>
                </div>

                <div className='space-y-2 mt-2'>
                    <TextInput 
                        label="Enter Search value" 
                        placeholder="hatchback" 
                    />
                </div>

                <div className='mt-4'>
                    <Button color='gray' fullWidth onClick={closing}>Find</Button>
                </div>

            </Modal>
        </>
    )
}

export default OperationModal
