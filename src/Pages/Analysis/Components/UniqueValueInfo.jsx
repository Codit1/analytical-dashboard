import React from 'react'

// for mantine imp
import { Progress, Text } from '@mantine/core'
import { BarChart } from '@mantine/charts'

const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

function UniqueValueInfo() {
    return (
        <div className='bg-white p-2 rounded-md'>
            <Text fw={"bold"} fz={"md"} c={"black"}>Unique Values Count</Text>

            <div className='mt-6 space-y-2'>
                
                <BarChart
                    h={200}
                    data={data}
                    dataKey="month"
                    orientation="vertical"
                    yAxisProps={{ width: 80 }}
                    barProps={{ radius: 10 }}
                    series={[{ name: 'Smartphones', color: 'blue.6' }]}
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
