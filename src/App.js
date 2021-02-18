import React, { useState, useEffect, useRef, useReducer } from 'react'

import ReactGA from 'react-ga'

// components
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import Introduction from './components/Introduction'
import WeeklyMenu from './components/WeeklyMenu'
import FoodMenu from './components/FoodMenu'
import DrinkMenu from './components/DrinkMenu'
import Events from './components/Events'
import Delivery from './components/Delivery'
import Gallery from './components/Gallery'
import ContactMapSection from './components/ContactMapSection'
import Contact from './components/Contact'
import Banner from './components/Banner'

// assets
import Background from './assets/BG@2x.jpg'

// other
import { makeStyles } from '@material-ui/core/styles'

import { client } from './client'


const useStyles = makeStyles({
  container: {
    width: '100%',
    border: '3px',

    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  subContainer: {
    width: '100%',
    margin: '0 auto'
  }
})

const App = () => {
  const classes = useStyles()

  const [language, setLanguage] = useState('hun')
  const [weeklyData, setWeeklyData] = useState(null)
  const [foodMenu, setFoodMenu] = useState(null)
  const [drinkMenu, setDrinkMenu] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const [gallery, setGallery] = useState(null)
  const [delivery, setDelivery] = useState(null)
  const [banner, setBanner] = useState(null)

  const aboutUsRef = useRef(null)
  const weeklyRef = useRef(null)
  const foodRef = useRef(null)
  const drinkRef = useRef(null)
  const eventRef = useRef(null)
  const deliveryRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    let foodMenuSections = []
    let drinkMenuSections = []
    client.getEntries()
      .then((response) => {
        response.items.forEach(item => {
          if (item.sys.contentType.sys.id === 'foodMenuSection') {
            foodMenuSections.push(item)
          } else if (item.sys.contentType.sys.id === 'weeklyMenu') {
            setWeeklyData(item.fields)
          } else if (item.sys.contentType.sys.id === 'drinkMenuSection') {
            drinkMenuSections.push(item)
          } else if (item.sys.contentType.sys.id === 'galery') {
            setGallery(item.fields)
          } else if (item.sys.contentType.sys.id === 'delivery') {
            setDelivery(item.fields)
          } else if (item.sys.contentType.sys.id === 'banner') {
            console.log(item.fields)
            setBanner(item.fields)
          }
        })
        setFoodMenu(foodMenuSections)
        setDrinkMenu(drinkMenuSections)
      })
      .catch(console.error)

    ReactGA.initialize('UA-189392348-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={classes.container}>
      
      <Navbar 
        language={language}
        setLanguage={setLanguage}
        aboutUsRef={aboutUsRef}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {banner && banner.bekapcsolva && <Banner data={banner}/>}
      <div className={classes.backgroundImage}>
        <LandingSection
          language={language}
        />
        <div className={classes.subContainer}>
          <Introduction
            language={language}
            myRef={aboutUsRef}
          />
          <WeeklyMenu
            language={language}
            data={weeklyData}
            myRef={weeklyRef}
          />
          <FoodMenu
            language={language}
            foodMenu={foodMenu}
            myRef={foodRef}
          />
          <DrinkMenu 
            language={language}
            data={drinkMenu}
            myRef={drinkRef}
          />
          <Events
            language={language}
            myRef={eventRef}
          />
          <Delivery 
            language={language}
            myRef={deliveryRef}
            delivery={delivery}
          />
        </div>
      </div>
      <Gallery data={gallery}/>
      <ContactMapSection 
        language={language}
        myRef={contactRef}
      />
      <Contact />

    </div>
  )
}

export default App;
