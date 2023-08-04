import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
          <Link href="/blog/tId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/img/blog-1.png"   alt="" width={400} height={250}/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                </div>
          </Link>
          <Link href="/blog/tId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/img/blog-2.png"   alt="" width={400} height={250}/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                </div>
          </Link>
          <Link href="/blog/tId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/img/blog-3.png"   alt="" width={400} height={250}/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                </div>
          </Link>
        </div>
    );
};

export default Blog;