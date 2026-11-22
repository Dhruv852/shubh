import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/palette.css'
import './styles/typography.css'
import './styles/global.css'
import './styles/entrance.css'
import './styles/letter.css'
import './styles/interlude.css'
import './styles/finale.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
