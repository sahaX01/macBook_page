import React from 'react'
import {useEffect, useRef } from 'react';

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
     if(videoRef.current){
      videoRef.current.playbackRate = 2;
     }
  },[])
  return (
    <section id="hero">
      <div>
          <h1>MacBook Pro</h1>
          <img src="/title.png" alt="MacBook Title" />
          <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playInline ></video>
          <button>Buy</button>
          <p>From &#8377;169900 or &#8377;29650/m for 6 month</p>
      </div>
      </section>
  )
}

export default Hero;