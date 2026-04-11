/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { Progress, Text } from '@mantine/core'
import { BarChart } from '@mantine/charts'

// for redux imp
import { useSelector } from 'react-redux'
import { selectUploadData } from '@store/uploadDataset'

function NullValueInfo() {

    // state to hold the mofied dataset obj
    const [ nullCounts, setNullCounts ] = useState([])

    const dataset = useSelector(selectUploadData)

    useEffect(() => {

        if(dataset){
            const testArr = []

            Object.entries(dataset?.null_value_columns).forEach(([key, value]) => {
                testArr.push({name: key, value: value})
            });

            setNullCounts(testArr)
        }
    }, [dataset])

    return (
        <div className='bg-white p-2 rounded-md'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Empty Cells Count</Text>
            <div className='mt-6 space-y-2'>
                
                <BarChart
                    h={400}
                    data={nullCounts}
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

export default NullValueInfo
