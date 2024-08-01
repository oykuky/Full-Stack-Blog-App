import React from 'react'
import styles from './links.module.css'
import NavbarLink from './navbarLink/navbarLink'

function Links() {
  const session=true;
  const isAdmin=true;
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
        <NavbarLink item={link} key={index}/>
      ))}
      {session ? (
          <>
            {
              isAdmin && <NavbarLink item={{title:"Admin",path:"/admin"}} />
            }
            <button className={styles.logout} >Logout</button>
          </>

        ) : (
          <NavbarLink item={{title:"Login",path:"/login"}} />
        )
      }
    </div>
  )
}

export default Links
