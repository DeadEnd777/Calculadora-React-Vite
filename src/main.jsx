import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Calculadora from './components/calculadora'
// Se obtiene el id root para renderizar toda la aplicación 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
)
