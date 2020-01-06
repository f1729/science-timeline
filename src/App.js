import React, { useState } from 'react';

import useFetch from 'use-http'

import AppMap from './components/map'
import RangeComponent from './components/range'

import './App.css'

function App() {
  const [ scientists, setScientists ] = useState([])

  const setTime = async (values) => {
    const response = await fetch(`https://api.pantheon.world/person?select=name,occupation,l,l_,age,id,slug,gender,birthyear,deathyear,bplace_country(id,country,continent,slug),bplace_geonameid(id,place,country,slug,lat,lon)&birthyear=gte.${values[0]}&birthyear=lte.${values[1]}&occupation=in.(MATHEMATICIAN,BIOLOGIST,PHYSICIST,PHYSICIAN,INVENTOR,ASTRONOMER,CHEMIST,ECONOMIST,ENGINEER,COMPUTER%20SCIENTIST,PSYCHOLOGIST,ARCHAEOLOGIST,ANTHROPOLOGIST,GEOGRAPHER,GEOLOGIST,SOCIOLOGIST,POLITICAL%20SCIENTIST,STATISTICIAN)&hpi=gte.4&order=hpi.desc.nullslast`, {}, [])
    const data = await response.json()

    setScientists(data)
  }

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1 style={{ fontFamily: 'initial' }}> Science Timeline!</h1>
      <AppMap scientists={scientists}/>
      <RangeComponent setTime={setTime}/>
    </div>
  )
}

export default App;
