
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress';
import { RouterProvider } from 'react-router';
import router from './router';


function App() {

  return (
    <>
      <MantineProvider >
        <Notifications position="top-center" zIndex={1000} limit={1} />
        <NavigationProgress />
        <RouterProvider router={ router } />
      </MantineProvider>
    </>
  )
}

export default App
