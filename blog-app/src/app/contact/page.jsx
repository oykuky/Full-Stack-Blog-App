import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

function Contact() {
  return (
    <div  className={styles.container}>
      <div className={styles.img}>
        <Image src='/contact.jpg' alt="" width={650} height={650} className={styles.imgshape} ></Image>
      </div>
      <div className={styles.form}>

      </div>
    </div>
  )
}

export default Contact
