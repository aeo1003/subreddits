import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from "@mui/material"
import './index.css'

const theme = createTheme({

  })

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  // </React.StrictMode>
      <App />
)
