"use client"
import React, { useState } from 'react'
import styles from './links.module.css'
import NavbarLink from './navbarLink/navbarLink'
import { IoMenuOutline } from "react-icons/io5";
import { signOut } from 'next-auth/react';


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
  

const Links = ({session}) => {
  const [open,setOpen]=useState(false);
  const signout = () => {
    signOut("github")
  }
 
  return (
  <div className={styles.container}> 
   <div className={styles.links}>
      {links.map((link,index)=>(
        <NavbarLink item={link} key={index}/>
      ))}
      {session?.user ? (
          <>
            {
              session.user?.isAdmin && <NavbarLink item={{title:"Admin",path:"/admin"}} />
            }
              <button onClick={signout} className={styles.logout} >Logout</button>
          </>

        ) : (
          <NavbarLink item={{title:"Login",path:"/login"}} />
        )
      }
    </div>
    <IoMenuOutline onClick={()=>setOpen(prev=>!prev)} className={styles.menuIcon} />
    {
      open && <div className={styles.menuLink}>
           {links.map((link,index)=>(
        <NavbarLink item={link} key={index}/>
      ))}
      </div>
    }
  </div>
  )
}

export default Links
