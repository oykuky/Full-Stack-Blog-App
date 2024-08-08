import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Postcard({post}) {
  return (
    <div className={styles.container} >
        <div className={styles.top}>
            <div className={styles.imgCont}>
                <Image src={post.img} alt='img' fill className={styles.img} />
            </div>
            <span className={styles.date}>
          08.08.2024
            </span>
        </div>
        <div className={styles.bottom} >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link href={`/blog/${post.id}`} className={styles.link} >READ MORE</Link>
        </div>
      
    </div>
  )
}

export default Postcard