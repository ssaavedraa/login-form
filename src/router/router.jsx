import { createBrowserRouter } from 'react-router-dom'
import { Auth } from '../pages/Auth'

export const browserRouter = createBrowserRouter([
  {
    path: '/auth/:method',
    element: <Auth />
  }
])
