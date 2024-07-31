import Link from 'next/link'
import React from 'react'
import styles from './links.module.css'

function Links() {
    const links = [
        {
            title:'Home',
            path: '/',
        },
        {
            title:'About',
            path: '/about', 
        },
        {
            title:'Contact',
            path: '/contact', 
        },
        {
            title:'Blog',
            path: '/blog', 
        },
        
    ]
  return (
    <div className={styles.links}>
      {links.map((link,index)=>(
        <Link href={link.path} className={styles.link} key={index}>{link.title}</Link>
      ))}
    </div>
  )
}

export default Links
