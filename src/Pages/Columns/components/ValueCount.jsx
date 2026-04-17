/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

// for mantine imp
import { BarChart } from '@mantine/charts';
import { Text, Paper, Select} from '@mantine/core';

// for redux imp
import { useSelector } from 'react-redux';
import { selectColumnData } from '@store/columns';



function ChartTooltip({ label, payload }) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={"bold"} mb={5}>
        {label}
      </Text>
      {payload.map((item) => (
        <Text fw={"bold"} key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function ValueCount() {

  const columnData = useSelector(selectColumnData)

  // state to hold column value count
  const [ columnValueCount, setColumnValueCount ] = useState([])

  useEffect(() => {
    if(columnData){
      const strData = []

      Object.entries(columnData?.value_count).forEach(([key, values]) => {
        strData.push({
          name: key,
          value: values
        })
      })

      setColumnValueCount(strData)
    }
  },[columnData])

  return (
    <div className='bg-white p-2 rounded-md'>

      <div>
        <Text fw={"bold"} fz={"lg"}>Value Count in <span className='text-slate-400'>{columnData?.column_name}</span> Column</Text>
      </div>

      <BarChart
        h={300}
        data={columnValueCount}
        dataKey="name"
        mt={10}
        series={[{ name: 'value', color: 'violet.6' }]}
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

export default ValueCount
