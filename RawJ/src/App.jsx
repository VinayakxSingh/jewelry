import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Explore from './components/explore'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // default is 0.1; lower = smoother
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optional cleanup (not mandatory)
    return () => lenis.destroy()
  }, [])
  return  (

    <div className="app-container">
       <Navbar/>
      <Hero/>
    <Explore/>
    <Footer/>
    </div>
   
    
  )
}

export default App
