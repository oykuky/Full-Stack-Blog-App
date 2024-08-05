'use client'
import Image from 'next/image';
import styles from './home.module.css'
import { useRouter } from 'next/navigation';


const Home = () => {
  const router=useRouter();
  return <div className={styles.container} >
    <div className={styles.textCont} >
        <h1 className={styles.title}>Creative
           Thoughts
          Agency</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dicta unde animi ipsa, rerum corporis harum totam maxime, temporibus consectetur iusto, error itaque! Optio, fugiat! Cum id a earum ex.</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={()=>router.push('/about')} >Learn More</button>
            <button className={styles.button} onClick={()=>router.push('/contact')} >Contact</button>
          </div>
          <div className={styles.brands}>
           <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
          </div>
    </div>
    <div className={styles.imgCont} >
        <Image alt='img' className={styles.Img} src="/hero.gif" width={600} height={600}  ></Image>
    </div>

  </div>;
};

export default Home; 

//Client Component’te (app router) next/navigation kullanıyoruz, Pages router da ise next/router olarak import ediyoruz.