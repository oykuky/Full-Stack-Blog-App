'use client'
import { register } from '@/lib/action'
import { useRouter } from  'next/navigation'
import React from 'react'

function RegisterPage() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun varsayılan yeniden yüklenme davranışını engelle
    const formData = new FormData(event.target); // Form verilerini al
    const response = await register(formData);

    if (response.success) {
      router.push('/'); // Başarılı kayıt işleminden sonra ana sayfaya yönlendir
    } else if (response.message) {
      alert(response.message); // Hata mesajı göster
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>  
        {/* Bir formun sunucuya veri göndermesi gerektiğinde kullanılır. */}
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage

