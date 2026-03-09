import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AppSectionFeatured from './components/AppSectionFeatured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppSectionFeatured />
      <AppFooter />
    </>
  )
}

export default App
