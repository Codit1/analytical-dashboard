import React from 'react'

// for mantine imp
import { BarChart } from '@mantine/charts';
import { Text, Paper } from '@mantine/core';

const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
  { month: 'July', Smartphones: 654, Laptops: 456, Tablets: 1432 },
  { month: 'August', Smartphones: 213, Laptops: 231, Tablets: 2341 },
  { month: 'September', Smartphones: 750, Laptops: 789, Tablets: 1678 },
  { month: 'October', Smartphones: 554, Laptops: 876, Tablets: 1200 },
  { month: 'November', Smartphones: 332, Laptops: 123, Tablets: 1543 },
  { month: 'December', Smartphones: 567, Laptops: 456, Tablets: 1432 },
]

function ChartTooltip({ label, payload }) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function InfoChartColumnValueCount() {
    return (
        <div className='bg-white p-2 rounded-md'>
            <div>
                <Text fw={"bold"} fz={"lg"}>Total counts in Columns</Text>
            </div>

            <BarChart
                h={400}
                data={data}
                dataKey="month"
                mt={10}
                series={[
                    { name: 'Smartphones', color: 'violet.6' },
                    { name: 'Laptops', color: 'blue.6' },
                    { name: 'Tablets', color: 'teal.6' },
                ]}
                tickLine="xy"
                gridAxis="xy"
                tooltipProps={{
                    content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
                    contentStyle: { background: 'white', color: 'black' },
                }}
                valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                withBarValueLabel
                valueLabelProps={{ position: 'inside', fill: 'white' }}
                // withLegend
                // legendProps={{ verticalAlign: 'bottom', height: 50 }}
            />
        </div>
    )
}

export default InfoChartColumnValueCount
