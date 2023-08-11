
import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
// import Error from 'next/error';

async function getData(){
    const res = await fetch("http://localhost:3000/api/posts",{
        cache: "no-store"
    });
    console.log(res)
    if(!res.ok){
        // throw new Error("Failed to fetch data")
        return notFound()
    }
    return res.json();
    
}

const Blog = async () => {
    
    const data = await getData();
    console.log(data)
    return (
        <div className={styles.mainContainer}>
            {
                data.map((item) =>(

                <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                        <div className={styles.imageContainer}>
                            <Image  className={styles.image} src={item.image}   alt="" width={400} height={250}/>
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                </Link>
          ))}
        </div>
    );
};

export default Blog;