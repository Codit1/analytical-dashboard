/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'

// for mantine imp
import { BarChart } from '@mantine/charts';
import { Text, Paper } from '@mantine/core';

// for redux imp
import { useSelector } from 'react-redux';
import { selectUploadData } from '@store/uploadDataset';

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

  const dataset = useSelector(selectUploadData)

  // state to hold name/value of value total count in column 
  const [ columnsCount, setColumnsCount ] = useState([])

  useEffect(() => {
    if(dataset){
      const data = []

      Object.entries(dataset?.total_value_columns).forEach(([key, value]) => {
        data.push({
          name: key,
          value: value
        })
      })

      setColumnsCount(data)
    }
  }, [dataset])

  return (
    <div className='bg-white p-2 rounded-md'>
      <div>
        <Text fw={"bold"} fz={"lg"}>Total counts in Columns</Text>
      </div>

      <BarChart
        h={400}
        data={columnsCount}
        dataKey="name"
        mt={10}
        series={[
          { name: 'value', color: 'violet.6' },
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
        withLegend
        legendProps={{ verticalAlign: 'bottom', height: 50 }}
      />
    </div>
  )
}

export default InfoChartColumnValueCount
