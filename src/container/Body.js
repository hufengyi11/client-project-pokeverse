import React from 'react'
import mobileImage from './Bsckground-Image/Background-vertical.jpg'
import desktopImage from './Bsckground-Image/Background-horizontal.jpg'


export default function Body() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div style={{backgroundImage: `url(${imageUrl})` }}>
      <h1>PokeVerse</h1>
    </div>
  )
}
