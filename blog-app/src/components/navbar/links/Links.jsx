"use client"
import React, { useState } from 'react'
import styles from './links.module.css'
import NavbarLink from './navbarLink/navbarLink'
import { IoMenuOutline } from "react-icons/io5";
import { handleLogout } from '@/lib/action';


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
  const isAdmin=true;
  const [open,setOpen]=useState(false);
 
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
            <form action={handleLogout}>
              <button className={styles.logout} >Logout</button>
            </form>
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
