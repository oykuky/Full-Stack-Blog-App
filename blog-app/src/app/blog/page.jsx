import styles from './blog.module.css'
import Postcard from '@/components/postcard/Postcard'

const getData =async ()=>{
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}})
    if(!resp.ok){
        throw new Error('Something went wrong')
    }  
    return resp.json();
}

const Blog = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
         {posts.map((post) =>(
            <div className={styles.post} key={post.id}>
            <Postcard post={post}/>
            </div>
          ))}
    </div>
  )
}

export default Blog


