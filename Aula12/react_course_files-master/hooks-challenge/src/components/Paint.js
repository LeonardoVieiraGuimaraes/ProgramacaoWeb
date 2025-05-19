import React, {useState, useEffect} from 'react'
import Name from './Name'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'
import WindowSize from './WindowSize'
import randomColor from 'randomcolor'

export default function Paint() {

  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }

  return (
    <div className="app">
      <header style={{ borderTop: `10px solid ${activeColor}` }}>
        <div>
          <Name />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </div>
      </header>
      {activeColor && (
        <Canvas
          color={activeColor}
          height={window.innerHeight}
        />
      )}
      <WindowSize />
    </div>
  )
}
