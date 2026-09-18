import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// A production build arrives with the page already rendered into #root by
// scripts/prerender.mjs, so React attaches to that markup rather than throwing
// it away and repainting — that swap was the flash of unstyled text on load.
// `vite dev` serves the bare shell, where hydrating an empty container would
// only log a mismatch and fall back to a client render anyway.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
