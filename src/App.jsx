 import React from 'react'
 import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Details from './Components/Details'
import Talk from './Components/Talk'
import Plan from './Components/Plan'
import Footer from './Components/Footer'
 
 const App = () => {
   return (
    <>
    <ReactLenis root className='overflow-hidden'>
    

      <Navbar/>
      <Banner/>
      <Details/>
      <Talk/>
      <Plan/>
      <Footer/>

      </ReactLenis> 
      </>
   )
 }
 
 export default App