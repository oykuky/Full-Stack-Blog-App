'use client';
import { useRouter } from  'next/navigation'
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React from 'react'

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const {data : session} = useSession();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const response = await login(formData);
    console.log("Login Response:", response);
    if (response.success) {
      router.push('/'); 
    } else if (response.error) {
      alert(response.error); 
    }
  };
  


  console.log("SESSİON LOGİN BAKALIM", session)
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;