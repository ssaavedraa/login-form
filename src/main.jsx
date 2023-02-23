import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { browserRouter } from './router/router'
import { SessionProvider } from './context/SessionContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <RouterProvider router={browserRouter} />
  </SessionProvider>
)
