import React from 'react'

// for mantine imp
import { Button } from '@mantine/core'

// for comp imp
import ActionBars from './Components/ActionBars'

function Analysis() {
    return (
        <section>
            <div>
                <Button>Show Charts</Button>
                <Button>New</Button>
            </div>

            <div>
                <ActionBars/>
            </div>

            
        </section>
    )
}

export default Analysis
