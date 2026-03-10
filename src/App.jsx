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

const social_nav = [
  {
    id: 'Facebook',
    url: '#',
    img: './src/img/footer-facebook.png'
  },
  {
    id: 'Periscope',
    url: '#',
    img: './src/img/footer-periscope.png'
  },
  {
    id: 'Pinterest',
    url: '#',
    img: './src/img/footer-pinterest.png'
  },
  {
    id: 'Twitter',
    url: '#',
    img: './src/img/footer-twitter.png'
  },
  {
    id: 'Youtube',
    url: '#',
    img: './src/img/footer-youtube.png'
  }
]

const featured_nav = [
  {
    id: '1',
    text: 'Digital Comics',
    url: '#',
    img: './src/img/buy-comics-digital-comics.png'
  },
  {
    id: '2',
    text: 'DC Merchandise',
    url: '#',
    img: './src/img/buy-comics-merchandise.png'
  },
  {
    id: '3',
    text: 'Subscription',
    url: '#',
    img: './src/img/buy-comics-subscriptions.png'
  },
  {
    id: '4',
    text: 'Comic Shop Locator',
    url: '#',
    img: './src/img/buy-comics-shop-locator.png'
  },
  {
    id: '5',
    text: 'DC Power Visa',
    url: '#',
    img: './src/img/buy-dc-power-visa.svg'
  },
]

const dc_links = [
  {
    id: '1',
    text: 'Shop DC',
    url: '#',
    cat: 'Shop'
  },
  {
    id: '2',
    text: 'Shop DC Collectibles',
    url: '#',
    cat: 'Shop'
  },
  {
    id: '3',
    text: 'DC',
    url: '#',
    cat: 'Sites'
  },
  {
    id: '4',
    text: 'MAD Magazine',
    url: '#',
    cat: 'Sites'
  },
  {
    id: '5',
    text: 'DC Kids',
    url: '#',
    cat: 'Sites'
  },
  {
    id: '6',
    text: 'DC Universe',
    url: '#',
    cat: 'Sites'
  },
  {
    id: '7',
    text: 'DC Power Visa',
    url: '#',
    cat: 'Sites'
  },
  {
    id: '8',
    text: 'Characters',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '9',
    text: 'Comics',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '10',
    text: 'Movies',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '11',
    text: 'TV',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '12',
    text: 'Games',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '13',
    text: 'Videos',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '14',
    text: 'News',
    url: '#',
    cat: 'DC Comics'
  },
  {
    id: '15',
    text: 'Terms Of Use',
    url: '#',
    cat: 'DC'
  },
  {
    id: '16',
    text: 'Privacy Policy (New)',
    url: '#',
    cat: 'DC'
  },
  {
    id: '17',
    text: 'Ad Choices',
    url: '#',
    cat: 'DC'
  },
  {
    id: '18',
    text: 'Advertising',
    url: '#',
    cat: 'DC'
  },
  {
    id: '19',
    text: 'Jobs',
    url: '#',
    cat: 'DC'
  },
  {
    id: '20',
    text: 'Subscriptions',
    url: '#',
    cat: 'DC'
  },
  {
    id: '21',
    text: 'Talent Workshops',
    url: '#',
    cat: 'DC'
  },
  {
    id: '22',
    text: 'CPSC Certificates',
    url: '#',
    cat: 'DC'
  },
  {
    id: '23',
    text: 'Rating',
    url: '#',
    cat: 'DC'
  },
  {
    id: '24',
    text: 'Shop Help',
    url: '#',
    cat: 'DC'
  },
  {
    id: '25',
    text: 'Contact Us',
    url: '#',
    cat: 'DC'
  }
]

function App() {

  return (
    <>
      <AppHeader header_nav={primary_nav} />
      <AppMain />
      <AppSectionFeatured featured_item={featured_nav} />
      <AppFooter footer_social={social_nav} footer_nav={dc_links} />
    </>
  )

}

export default App
