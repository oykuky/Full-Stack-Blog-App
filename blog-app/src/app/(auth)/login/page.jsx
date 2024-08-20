'use client'
import React from 'react'
import styles from "./login.module.css";
import { signIn,signOut, useSession } from 'next-auth/react';
import LoginForm from '@/components/loginForm/loginForm';


function Login() {
  const handleClick = () => {
    try {
      signIn("github");
    } catch (error) {
      console.log(error)
    }
   
  }
    const {data : session} = useSession();
    console.log(session,"SESSİON")

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <button onClick={handleClick} className={styles.github}>Login with Github</button>
      </div>
    </div>
  )
}

export default Login
