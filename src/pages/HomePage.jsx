import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero'
import NewsSlider from '../components/Route/NewsSlider'
import Schools from '../components/Route/Schools'
import Programs from '../components/Route/Programs'
import Life from '../Routes/Life'
import Footer from '../components/Layout/Footer'
import VirtualTour from '../Routes/VirtualTour'
import News from '../Routes/News'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Schools />
        <NewsSlider />
        <Programs />
        <Life />
        <News />
        <VirtualTour />
        <Footer />
    </div>
  )
}

export default HomePage