
import React from 'react'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

const AppMap = (props)  => {
  const { scientists } = props
  console.log('RE-MAP')

  const openData = (scientist) => {
    console.log('click', scientist)
  }

  return (
    <div>
      <Map center={[50.879, 4.6997]} zoom={2.3} width={1000} height={800}>
        {
          scientists.map((scientist, index) => (
            scientist.bplace_geonameid &&
            <Overlay anchor={[scientist.bplace_geonameid.lat + Math.random() * 5, scientist.bplace_geonameid.lon + Math.random() * 5]} key={index}>
              <img src={`https://pantheon.world/images/profile/people/${scientist.id}.jpg`}
                   style={{ height: 15, width: 15, cursor: 'pointer', borderRadius: '50%'}}
                   onClick={() => { openData(scientist)} } alt={scientist.name}
                   onError={(e) => { e.target.src = 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png' }}
              />
            </Overlay>))
        }
      </Map>
    </div>
  )
}

export default AppMap

/*
{
  "name": "Nilakantha Somayaji",
  "l": 16,
  "occupation": "MATHEMATICIAN",
  "l_": 2.74301096119058,
  "age": 575,
  "id": "1156676",
  "slug": "Nilakantha_Somayaji",
  "gender": "M",
  "birthyear": 1444,
  "deathyear": 1544,
  "bplace_country": {
  "id": "India",
    "country": "India",
    "continent": "Asia",
    "slug": "india"
},
  "bplace_geonameid": {
  "id": 3123670,
    "place": "Tirur",
    "country": "India",
    "slug": "tirur",
    "lat": 10.9,
    "lon": 75.92
}
},
  {
    "name": "Leonardo da Vinci",
    "l": 215,
    "occupation": "INVENTOR",
    "l_": 15.3193462450437,
    "age": 567,
    "id": "18079",
    "slug": "Leonardo_da_Vinci",
    "gender": "M",
    "birthyear": 1452,
    "deathyear": 1519,
    "bplace_country": {
      "id": "Italy",
      "country": "Italy",
      "continent": "Europe",
      "slug": "italy"
    },
    "bplace_geonameid": {
      "id": 11525,
      "place": "Florence",
      "country": "Italy",
      "slug": "florence",
      "lat": 43.78333333,
      "lon": 11.25
    }
  },
*/
