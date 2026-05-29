import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-right" />

    <RouterProvider router={router} />
  </StrictMode>,
)
