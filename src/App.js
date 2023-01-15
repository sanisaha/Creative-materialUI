import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from './component/Layout/Layout';
import {theme} from './theme/theme'
import Home from './component/pages/Home/Home';

const router = createBrowserRouter([{
  element: <Layout/>,
  path: '/',
  children: [
    {
      element:<Home/>,
      path:'/'
    },
  ]
},])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>

      </RouterProvider>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
