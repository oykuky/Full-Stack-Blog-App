import React from 'react'

import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { signIn } from '@/lib/auth';
// import LoginForm from '@/components/loginForm/loginForm';


function Login() {

  const handleGithubLogin = async (event) => {
    "use server"
    event.preventDefault();
    try {
      await signIn("github");
    } catch (error) {
      console.error("GitHub authorize error", error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form onSubmit={handleGithubLogin}>
          <button type="submit" className={styles.github}>Login with Github</button>
        </form>
        {/* <LoginForm /> */}
      </div>
    </div>
  )
}

export default Login
 