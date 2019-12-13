import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

import AppMap from './components/map'

import './App.css';

function App() {
  const [ values, setValues ] = useState([ 200, 1509 ])
  console.log('kek')

  const scientists = [
    {
      name: 'Stephen Hawking',
      birth: 'xxxx',
      icon: 'https://www.famousbirthdays.com/faces/hawking-stephen-image.jpg',
      position: [ 51.5, -0.116667 ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Albert Einstein',
      icon: 'https://i.ebayimg.com/images/g/XAAAAMXQ8odRGWQv/s-l300.jpg',
      birth: 'xxxx',
      position: [ 52.516667, 13.4 ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Nikola Tesla',
      icon: 'https://www.famousbirthdays.com/faces/tesla-nikola-image.jpg',
      birth: 'xxxx',
      position: [ 44.566667, 15.316667 ],
      biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
  ]

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1 style={{fontFamily: 'initial'}}> Science Timeline!</h1>
      <AppMap scientists={scientists}/>
      <Range
        values={values}
        step={1}
        min={1}
        max={2019}
        onChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: 1,
                  max: 2019
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA"
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC"
              }}
            />
          </div>
        )}
      />

      <output style={{ marginTop: "30px" }} id="output">
        {`${values[0]} - ${values[1]}`}
      </output>

    </div>
  )
}

export default App;
