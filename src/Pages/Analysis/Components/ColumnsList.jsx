// import { useEffect } from 'react'

// for mantine imp
import { Badge, Flex } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

function ColumnsList() {

    const data = useSelector(selectUploadData)

    const renderColumns = data?.columns_list.map((column, indx) => (
        <Badge key={indx} color="white" c={"gray"} size='md'>{column}</Badge>
    ))

    return (
        <>
            <Flex 
                gap="xs"
                justify={"flex-end"}
                align={"center"}
                wrap="wrap"
            >
                {renderColumns}
            </Flex>
        </>
    )
}

export default ColumnsList
