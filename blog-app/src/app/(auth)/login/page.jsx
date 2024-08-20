'use client'
import React from 'react'
import styles from "./login.module.css";
// import { signIn } from '@/lib/auth';
import { signIn, signOut, useSession } from 'next-auth/react';
// import LoginForm from '@/components/loginForm/loginForm';


function Login() {

  // const handleGithubLogin = async () => {
  //   "use server"
  //   try {
  //     await signIn("github");
  //   } catch (error) {
  //     console.error("GitHub authorize error", error);
  //   }
  // };
 
const handleClick = () => {
  signIn("github");
}
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      {/* <form action={handleGithubLogin}>
          <button type="submit" className={styles.github}>Login with Github</button>
        </form> */}
        {/* <LoginForm /> */}
      
          <button onClick={handleClick} className={styles.github}>Login with Github</button>
       
      </div>
    </div>
  )
}

export default Login
 