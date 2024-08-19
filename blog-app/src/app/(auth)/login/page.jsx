
import React from 'react'
import styles from "./login.module.css";
import { signIn } from '@/lib/auth';

// import LoginForm from '@/components/loginForm/loginForm';


function Login() {

  const handleGithubLogin = async () => {
    "use server"
    try {
      await signIn("github");
    } catch (error) {
      console.error("GitHub authorize error", error);
    }
  };
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.wrapper}>
  //     <form onSubmit={handleGithubLogin}>
  //         <button type="submit" className={styles.github}>Login with Github</button>
  //       </form>
  //       {/* <LoginForm /> */}
  //     </div>
  //   </div>
  // )
  return (
    <div >
    
      <form onSubmit={handleGithubLogin}>
          <button type="submit" className={styles.github}>Login with Github</button>
        </form>
  
      </div>
   
  )
}

export default Login
 