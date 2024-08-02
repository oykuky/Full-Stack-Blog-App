"use client"
import React, { useState } from 'react'
import styles from './links.module.css'
import NavbarLink from './navbarLink/navbarLink'
import { IoMenuOutline } from "react-icons/io5";

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
  

function Links() {
  const session=false;
  const isAdmin=true;
  const [open,setOpen]=useState(false);
 
  return (
  <div className={styles.container}> 
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
