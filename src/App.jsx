import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AppSectionFeatured from './components/AppSectionFeatured'


const primary_nav = [
  {
    id: '1',
    text: 'Character',
    url: '#',
    active: false
  },
  {
    id: '2',
    text: 'Comics',
    url: '#',
    active: true
  },
  {
    id: '3',
    text: 'Movie',
    url: '#',
    active: false
  },
  {
    id: '4',
    text: 'TV',
    url: '#',
    active: false
  },
  {
    id: '5',
    text: 'Games',
    url: '#',
    active: false
  },
  {
    id: '6',
    text: 'Collectibles',
    url: '#',
    active: false
  },
  {
    id: '7',
    text: 'Videos',
    url: '#',
    active: false
  },
  {
    id: '8',
    text: 'Fans',
    url: '#',
    active: false
  },
  {
    id: '9',
    text: 'News',
    url: '#',
    active: false
  },
  {
    id: '10',
    text: 'Shop',
    url: '#',
    active: false
  }
]

function App() {

  return (
    <>
      <AppHeader header_nav={primary_nav} />
      <AppMain />
      <AppSectionFeatured />
      <AppFooter />
    </>
  )

}

export default App
