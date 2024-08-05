import React from 'react'
import styles from './postuser.module.css'


const getData =async (userId)=>{
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if(!resp.ok){
          throw new Error('Something went wrong')
      }  
      return resp.json();
  }

const Postuser = async({userId})=> {
    const user = await getData(userId);
  return (
         <div className={styles.container} >
              <span className={styles.title}>Author</span>
              <span className={styles.username}>{user.name}</span>
         </div>
 
  )
}

export default Postuser

//2.28