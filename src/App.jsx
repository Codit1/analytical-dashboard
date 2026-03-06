
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress';
import { RouterProvider } from 'react-router';
import router from './router';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {

  return (
    <>
      <MantineProvider theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <NavigationProgress />
        <RouterProvider router={ router } />
      </MantineProvider>
    </>
  )
}

export default App
