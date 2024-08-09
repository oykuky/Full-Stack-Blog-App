import React, { Suspense } from 'react'
import styles from './singlepage.module.css'
import Image from 'next/image'
import Postuser from '@/components/postuser/Postuser'
import { getPost } from '@/lib/data'


const SinglePage = async({params})=> {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
        <div className={styles.imgcont}>
         <Image src={post?.img || '/about.png'} alt={post?.title || 'Post image'} fill className={styles.img} />
        </div>
      <div className={styles.textcontainer} >
          <h1>{post?.title}</h1>
          <div className={styles.detail}>
           { post && 
           (<Suspense fallback={<div> Loading... </div>} > 
             <Postuser userId={post.userId} />
           </Suspense>)}
            <div className={styles.detailText} >
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}> 
                {/* {post.createdAt.toString().slice(4, 16)} */}
                2024
              </span>
            </div>
          </div>
         <p>{post?.desc}</p>
        </div>
      </div>
  )
}

export default SinglePage