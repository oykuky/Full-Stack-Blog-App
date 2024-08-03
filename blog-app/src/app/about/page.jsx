import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

function About() {
  return (
    <div> className={styles.container}
      <div>
        <Image src="/about.png" alt='about-img'  width={600} height={600} ></Image>
      </div>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>We create digital ideas that are bigger,bolder,braver and better.</h1>
        <p>We create digital ideas that are bigger,bolder,braver and better.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, deleniti deserunt? Fugiat, esse perspiciatis. Repellat maiores architecto nisi assumenda expedita sequi optio, eius eveniet veritatis autem possimus doloremque nesciunt est.</p>
      </div>
  </div>
  )
}

export default About
