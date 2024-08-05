import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Postcard() {
  return (
    <div className={styles.container} >
        <div className={styles.top}>
            <div className={styles.imgCont}>
                <Image src='/post.png' alt='img' fill className={styles.img} />
            </div>
            <span className={styles.date}>
          08.08.2024
            </span>
        </div>
        <div className={styles.bottom} >
          <h1>Title</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aut ratione itaque!</p>
          <Link href='/blog/post' className={styles.link} >READ MORE</Link>
        </div>
      
    </div>
  )
}

export default Postcard