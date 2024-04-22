import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeToggle } from "./components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    <ModeToggle />
    </ThemeProvider>
  </React.StrictMode>,
)
