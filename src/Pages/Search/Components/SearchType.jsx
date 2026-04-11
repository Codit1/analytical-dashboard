import React from 'react'

// for mantine imp
import { Chip, Group, Text, Badge } from '@mantine/core';

function SearchType({ openColumnList }) {
    return (
        <div className='flex items-end justify-between'>
            <div className='flex items-center'>
                <Text fw={"bold"} fz={"lg"}>Searching :</Text>
                <Badge c='black' color='white' ml={"md"}>The Whole Dataset</Badge>
            </div>

            <div>
                <Text fw={"bold"} fz={"sm"}>Select Searching Type</Text>
                <Chip.Group>
                    <Group justify="center">
                        <Chip onClick={ openColumnList } color='black' c={"white"} value={"1"}>Column</Chip>
                        <Chip color='black' c={"white"} value="2">Whole Dataset</Chip>
                    </Group>
                </Chip.Group>
            </div>
        </div>
    )
}

export default SearchType
