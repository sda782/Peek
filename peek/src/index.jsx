import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
ReactDOM.render(<ThemeProvider theme={darkTheme}><App /></ThemeProvider>, document.getElementById("root"))