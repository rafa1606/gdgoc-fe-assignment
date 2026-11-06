import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import { prefetchPageData } from './api/prefetch.ts'
import App from './App.tsx'
import { preloadImages } from './utils/preloadImages.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

preloadImages()
prefetchPageData()