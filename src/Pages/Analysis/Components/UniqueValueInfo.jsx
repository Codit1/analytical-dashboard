/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Progress, Text } from '@mantine/core'
import { BarChart } from '@mantine/charts'

// for redux imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

function UniqueValueInfo() {

    const dataset = useSelector(selectUploadData)

    // state to hold unique value count
    const [uniqueValueCount, setUniqueValueCount] = useState([])

    // useEffect to get unique value count
    useEffect(() => {
        if(dataset){
            const testArr = []

            Object.entries(dataset?.no_unique).forEach(([key, value]) => {
                testArr.push({name: key, value: value})
            });

            setUniqueValueCount(testArr)
        }
    }, [dataset])
    return (
        <div className='bg-white p-2 rounded-md'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Unique Values Count</Text>

            <div className='mt-6 space-y-2'>
                
                <BarChart
                    h={400}
                    data={uniqueValueCount}
                    dataKey="name"
                    orientation="vertical"
                    yAxisProps={{ width: 80 }}
                    barProps={{ radius: 10 }}
                    series={[{ name: 'value', color: 'blue.6' }]}
                    withTooltip={false}
                    valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                    withBarValueLabel
                    valueLabelProps={{ position: 'inside', fill: 'white' }}
                />
            </div>
        </div>
    )
}

export default UniqueValueInfo
