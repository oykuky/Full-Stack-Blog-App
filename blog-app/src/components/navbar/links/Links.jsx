import Link from 'next/link'
import React from 'react'

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
    <div>
      {links.map((link,index)=>(
        <Link href={link.path} key={index}>{link.title}</Link>
      ))}
    </div>
  )
}

export default Links
