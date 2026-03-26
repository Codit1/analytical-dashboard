import React from 'react'

// for mantine imp
import { Badge, Flex } from '@mantine/core'

function ColumnsList() {
    return (
        <>
            <Flex 
                gap="xs"
                justify={"flex-end"}
                align={"center"}
                wrap="wrap"
            >
                <Badge color="white" c={"gray"} size='lg'>Column 1</Badge>
                <Badge color="white" c={"gray"} size='lg'>Column 2</Badge>
                <Badge color="white" c={"gray"} size='lg'>Column 3</Badge>
                <Badge color="white" c={"gray"} size='lg'>Column 4</Badge>
                <Badge color="white" c={"gray"} size='lg'>Column 5</Badge>
            </Flex>
        </>
    )
}

export default ColumnsList
