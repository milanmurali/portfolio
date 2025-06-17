import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Pranav } from './Pranav'
import { Portfolio } from './assets/Portfolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
    {/* <Pranav/> */}
  </StrictMode>,
)
