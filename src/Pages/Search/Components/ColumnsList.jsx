import React from 'react'

// for mantine imp
import { Chip, Group, Text, Grid } from '@mantine/core';
import { Modal } from '@mantine/core';

function ColumnsList({ opened, closing }) {
    return (
        <>
            <Modal
                opened={ opened }
                onClose={ closing }
                title="Columns"
                centered
                size="lg"
            >

                <Text fw={"bold"} fz={"sm"} c={"gray"}>Select Column for Searching</Text>

                <Chip.Group >
                    <Grid grow mt={10}>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"1"}>fuel_consumption_l_per_100km</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"2"}>Column</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"3"}>Column</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"4"}>fuel_consumption_l_per_100km</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"5"}>fuel_consumption_l_per_100km</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"6"}>Column</Chip>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Chip color='black' c={"white"} value={"7"}>fuel_consumption_l_per_100km</Chip>
                        </Grid.Col>
                    </Grid>
                </Chip.Group>
                
            </Modal>
        </>
    )
}

export default ColumnsList
