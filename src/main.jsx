/**
 * 應用入口：掛載 React 根節點、注入設計 Tokens、載入全局樣式
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { applyDesignTokens } from '@/design-system'
import { useVisitorLog } from '@/hooks/useVisitorLog'
import './index.css'
import App from './App.jsx'

applyDesignTokens()

function AppWithVisitorLog() {
  useVisitorLog()
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithVisitorLog />
  </StrictMode>,
)
