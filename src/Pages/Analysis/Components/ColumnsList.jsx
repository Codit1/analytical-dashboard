// import { useEffect } from 'react'

// for mantine imp
import { Badge, Flex, Button } from '@mantine/core'

// for redux imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

// for react router imp
import { useNavigate, useSearchParams } from 'react-router'

function ColumnsList() {

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const datasetid = searchParams.get("id")

    const data = useSelector(selectUploadData)

    const renderColumns = data?.columns_list.map((column, indx) => (
        <Button 
            key={indx} 
            color="white" 
            c={"gray"} 
            size='xs' 
            px={"xs"} 
            radius={"xl"}
            onClick={() => {
                navigate(`column?id=${datasetid}&column=${column}`)
            }}
        >{column}</Button>
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
