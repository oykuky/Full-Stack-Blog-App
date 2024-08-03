import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle} >About Agency</h2>
        <h1 className={styles.title} >We create digital ideas that are bigger,bolder,braver and better.</h1>
        <p className={styles.ptag}>We create digital ideas that are bigger,bolder,braver and better.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, deleniti deserunt? Fugiat, esse perspiciatis. Repellat maiores architecto nisi assumenda expedita sequi optio, eius eveniet veritatis autem possimus doloremque nesciunt est.</p>

        <div className={styles.Bigbox}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>230 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>3 K+</h1>
            <p>Service and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image src="/about.png" alt='about-img' width={600} height={600} ></Image>
      </div>

    </div>
  )
}

export default About
