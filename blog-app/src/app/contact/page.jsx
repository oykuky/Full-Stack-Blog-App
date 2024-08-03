import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

function Contact() {
  return (
    <div  className={styles.container}>
      <div className={styles.img}>
        <Image src='/contact.jpg' alt="" width={480} height={480} className={styles.imgshape} ></Image>
      </div>
      <div className={styles.formContainer}>
          <form className={styles.form}>
            <input placeholder='Name and Surname' ></input>
            <input placeholder='Email adress' ></input>
            <input placeholder='Phone Number (Optional)' ></input>
            <textarea cols={60} rows={11} placeholder='Message'></textarea>
            <button>Send</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
