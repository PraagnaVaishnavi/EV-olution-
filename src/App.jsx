import React,{ useState } from 'react'

import './App.css'
import Navbar from './Components/navbar/navbar.jsx'
import Background from './Components/background/background.jsx'
import Hero from './Components/hero/hero.jsx'
function App() {
  const heroData=[
    {text1:"Feel the", text2:"Drive"},
    {text1:"Get the", text2:"Drive"},
    {text1:"Experience the", text2:"Drive"}
  ]
  const [heroCount,setHeroCount]=useState(2);
  const [play,setPlay]=useState(false);
  return (
    <>
      <div>
        <Background play={play} heroCount={heroCount}/>
        <Navbar/>
        <Hero 
        setPlay={setPlay}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        play={play}
        heroCount={heroCount}
        />
      </div>
    </>
  )
}

export default App
