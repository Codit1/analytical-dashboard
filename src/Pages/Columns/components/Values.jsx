/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Pagination, Table, Text, ScrollArea, NumberFormatter, LoadingOverlay } from '@mantine/core'
import { notifications } from '@mantine/notifications';

// for router imp
import { useSearchParams } from 'react-router';

// for redux imp
import { useSelector, useDispatch } from 'react-redux';
import { selectColumnData, selectLoadingColumnPagination, selectColumnPaginationData, columnPagination } from '@store/columns';

function Values() {

    const dispatch = useDispatch();
    
    const [searchParams] = useSearchParams();
    
    const id = searchParams.get('id')
    const columnName = searchParams.get("column")

    const columnData = useSelector(selectColumnData);
    const loadingColumnPagination = useSelector(selectLoadingColumnPagination);
    const columnPaginationData = useSelector(selectColumnPaginationData);

    // state to hold colum vaues 
    const [ columnValues, setColumnValues ] = useState([]);

    const rows = columnValues?.map((value, indx) => (
        <Table.Tr key={indx}>
            <Table.Td>{indx++}</Table.Td>
            <Table.Td>{value}</Table.Td>
        </Table.Tr>
    ));

    // func to handle pagination change
    const paginationChange = (page) => {

        const pageData = {
            page: page,
            limit: 100,
            dataset_id: id,
            column: columnName
        }

        dispatch(columnPagination(pageData)).unwrap()
        .then((res) => {
            setColumnValues(res)
        })
        .catch(err => {
            notifications.show({
                ...err,
                color: "orange"
            })
        })
    }

    useEffect(() => {
        
        setColumnValues(columnData?.values)

    }, [columnData])


    return (
        <div className='bg-white rounded-md p-2'>

            <LoadingOverlay visible={ loadingColumnPagination }/>

            <div>

                <div className='flex items-center justify-between'>
                    <Text fw={"bold"} fz={"md"} >Column Data</Text>
                    <Text fw={"bold"} fz={"md"}>
                        <span>Total: </span>
                        <NumberFormatter thousandSeparator value={columnData?.total_values} />
                    </Text>
                </div>

                {/* <div className='flex items-end justify-between mt-4 px-6'>
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
                </div> */}

                <div className='mt-4'>
                    <ScrollArea h={300} offsetScrollbars >
                        <Table 
                            highlightOnHover 
                            withTableBorder 
                            withColumnBorders
                            stickyHeader 
                            // stickyHeaderOffset={60}
                        >
                            <Table.Thead>
                                <Table.Tr>
                                <Table.Th>S/N</Table.Th>
                                <Table.Th>Vzlues</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
        
                    </ScrollArea>
                </div>

                <div className='w-fit mx-auto mt-4'>
                    <Pagination 
                        total={(columnData?.total_values/100).toFixed(0)}
                        onChange={(value) => {
                            console.log(value)
                            paginationChange(value)
                        }}
                        color='#363A38' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Values
