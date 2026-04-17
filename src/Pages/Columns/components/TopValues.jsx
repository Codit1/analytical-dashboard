/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

// for mantine imp
import { Progress, Text } from '@mantine/core'
import { BarChart } from '@mantine/charts'

// for redux imp
import { useSelector } from 'react-redux';
import { selectColumnData } from '@store/columns';

function TopValues() {

    const columnData = useSelector(selectColumnData);

    // state to hold topvalues structured data
    const [ topValues, setTopValues ] = useState([])

    useEffect(() => {
        if(columnData){
            const strData = []

            Object.entries(columnData?.top_values).forEach(([keys, values]) => {
                strData.push({
                    name: keys,
                    value: values
                })
            })

            setTopValues(strData)
        }
    }, [columnData])

    return (
        <div className='bg-white p-2 rounded-md md:w-[60%]'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Top Values Count</Text>
            <div className='mt-6 space-y-2'>
                
                <BarChart
                    h={200}
                    data={topValues}
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

export default TopValues
