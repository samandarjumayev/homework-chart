import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Settings from './components/Settings.jsx'
import Cart from './components/Cart.jsx'
import Message from './components/Message.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/message',
        element: <Message />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
