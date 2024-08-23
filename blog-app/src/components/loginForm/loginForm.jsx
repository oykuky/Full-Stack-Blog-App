'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Doğru yerden import edin
import styles from "./loginForm.module.css";
import Link from "next/link";
import React from 'react';

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const username = formData.get('username');
    const password = formData.get('password');
    
    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false, // Bu ayar ile yönlendirme yapılmaz
      });

      if (result?.error) {
        alert(result.error); // Giriş hatasını göster
      } else {
        router.push('/'); // Başarılı girişten sonra yönlendirme
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        <Link href="/register">
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
