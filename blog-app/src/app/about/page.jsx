import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
      <Image src="/about.png" alt='about-img'  width={600} height={600} ></Image>
    </div>
  )
}

export default About
