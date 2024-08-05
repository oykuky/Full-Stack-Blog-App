import React from 'react'
import styles from './blog.module.css'
import Postcard from '@/components/postcard/Postcard'

function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      </div>
    
    </div>
  )
}

export default Blog


//1.27