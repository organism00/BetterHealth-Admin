import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ToastProvider } from './Components/Loaders/ToastContext'

const App = () => {
  return (
    <>
    <ToastProvider>
      <AppRoutes/>
    </ToastProvider>
    </>
  )
}

export default App