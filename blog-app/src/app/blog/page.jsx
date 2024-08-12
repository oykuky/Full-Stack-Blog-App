import { getPosts } from '@/lib/data';
import styles from './blog.module.css'
import Postcard from '@/components/postcard/Postcard'

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const Blog = async () => {
  //FETCH DATA WİTH AN API
  // const posts = await getData();
  const posts = await getPosts();
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


