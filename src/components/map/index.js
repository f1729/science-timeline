
import React from 'react'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

const AppMap = (props)  => {
  const { scientists } = props

  console.log('RE-MAP')
  const openData = () => {
    console.log('click in pikachu')
  }

  return (
    <div>
      <Map center={[50.879, 4.6997]} zoom={2.5} width={1000} height={800}>
        {
          scientists.map((scientist, index) => (
            <Overlay anchor={scientist.position} key={index}>
              <img src={scientist.icon}
                   style={{ height: 30, width: 30, cursor: 'pointer', borderRadius: '50%'}}
                   onClick={openData} alt={'pikachu'}/>
            </Overlay>))
        }
      </Map>
    </div>
  )
}

export default AppMap