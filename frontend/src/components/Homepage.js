import React from 'react'
import Footer from './Footer';
import Navigator from './Navigator';
import Slider from './Slider';
import NewToG from './NewToG';
import Events from './Events';
import Stats from './Stats';
import Persons from './Persons';


export default function Homepage() {
  return (
    <div>
         <Navigator />
         <Slider />
         <NewToG />
         <Events />
         <Stats />
         <Persons />
         <Footer />
    </div>
  )
}
