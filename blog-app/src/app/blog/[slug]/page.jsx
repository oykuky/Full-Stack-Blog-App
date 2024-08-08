import React, { Suspense } from 'react'
import styles from './singlepage.module.css'
import Image from 'next/image'
import Postuser from '@/components/postuser/Postuser'
import { getPost } from '@/lib/data'

//server-side component
//FETCH DATA WİTH AN FAKE API
// const getData =async (title)=>{
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${title}`,{next:{revalidate:3600}})
//     if(!resp.ok){
//         throw new Error('Something went wrong')
//     }  
//     return resp.json();
// }

const SinglePage = async({params})=> {
  const {slug} = params;
   const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgcont}>
          <Image src={post?.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textcontainer} >
          <h1>{post?.title}</h1>ö
          <div className={styles.detail}>
           { post && 
           (<Suspense fallback={<div> Loading... </div>} > 
             <Postuser userId={post?.userId} />
           </Suspense>)}
            <div className={styles.detailText} >
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}> {post?.createdAt.toString().slice(4, 16)}</span>
            </div>
          </div>
         <p>{post?.desc}</p>
        </div>
      </div>
  )
}

export default SinglePage