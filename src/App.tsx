import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
