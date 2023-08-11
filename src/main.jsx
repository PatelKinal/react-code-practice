import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DarkMode from './second_dark_mode/DarkMode'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkMode />
  </React.StrictMode>,
)
