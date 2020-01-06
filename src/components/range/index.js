import React, { useState } from 'react'

import { useDebouncedCallback } from 'use-debounce'
import {getTrackBackground, Range} from 'react-range'

const RangeComponent = (props) => {
  const [values, setValues] = useState([1409, 1509])

  const [ debounceCallback ] = useDebouncedCallback((value) => {
    props.setTime(value)
  }, 1000)

  const onChangeRange = (values) => {
    setValues(values)
    debounceCallback(values)
  }

  return (
    <div>
      <Range
        values={values}
        step={100}
        min={1}
        max={2020}
        onChange={onChangeRange}
        renderTrack={({props, children}) => (
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
                  max: 2020
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({props, isDragged}) => (
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

      <output style={{marginTop: "30px"}} id="output">
        {`${values[0]} - ${values[1]}`}
      </output>
    </div>)
}

export default RangeComponent
