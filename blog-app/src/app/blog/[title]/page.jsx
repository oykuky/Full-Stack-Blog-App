import React from 'react'
import styles from './singlepage.module.css'
import Image from 'next/image'

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgcont} >
        <Image className={styles.img} src='/contact.jpg' alt='' fill />
      </div>
      <div className={styles.textcontainer} >
          <h1>Title</h1>
          <div className={styles.detail}>
           <Image src='/about.png' alt='' width={50} height={50} className={styles.avatar} />
            <div className={styles.detailText} >
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>oyku</span>
            </div>
            <div className={styles.detailText} >
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>date</span>
            </div>
          </div>
         <p>Desc</p>
        </div>
      </div>
  )
}

export default SinglePage