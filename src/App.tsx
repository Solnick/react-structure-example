import { Layout } from './shared/components/Layout';
import { Routing } from './shared/components/Routing';
import { ThemeProvider } from '@mui/material';
import { createReactExampleTheme } from './shared/utils/createReactExampleTheme';
import { BrowserRouter } from 'react-router-dom';

const theme = createReactExampleTheme()
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
       <Layout>
         <Routing />
       </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
