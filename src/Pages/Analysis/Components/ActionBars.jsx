import React from 'react'

// for mantine imo
import { Text, NumberFormatter } from '@mantine/core'

function ActionBars() {
    return (
        <div className='grid grid-cols-2 gap-4 lgc:grid-cols-4' >
            <div className='h-25 bg-[#5A5A5C] rounded-md'>
                <Text>Daily Revenue</Text>
                <NumberFormatter value={1000} thousandSeparator />
                <Text>Name of Coulmn</Text>
            </div>
            <div className='h-25 bg-[#5A5A5C] rounded-md'>
                <Text>Daily Revenue</Text>
                <NumberFormatter value={1000} thousandSeparator />
                <Text>Name of Coulmn</Text>
            </div>
            <div className='h-25 bg-[#5A5A5C] rounded-md'>
                <Text>Daily Revenue</Text>
                <NumberFormatter value={1000} thousandSeparator />
                <Text>Name of Coulmn</Text>
            </div>
            <div className='h-25 bg-[#5A5A5C] rounded-md'>
                <Text>Daily Revenue</Text>
                <NumberFormatter value={1000} thousandSeparator />
                <Text>Name of Coulmn</Text>
            </div>
        </div>
    )
}

export default ActionBars
