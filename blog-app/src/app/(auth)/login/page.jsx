'use client'
import React from 'react'
import styles from "./login.module.css";
// import { signIn } from '@/lib/auth';
import { signIn,signOut, useSession } from 'next-auth/react';


function Login() {
  const handleClick = () => {
    try {
      signIn("github");
    } catch (error) {
      console.log(error)
    }
   
  }
  const signout = () => {
    signOut("github")
  }
  const {data : session} = useSession();
  console.log(session,"kmkmspdfkewfko")

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <LoginForm /> */}
        <button onClick={handleClick} className={styles.github}>Login with Github</button>
        <button onClick={signout} className={styles.github}>signout</button>

      </div>
    </div>
  )
}

export default Login
