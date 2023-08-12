import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';




async function getData(){
    const res = await fetch('http://localhost:3000/api/posts',{
            cache: "no-store",
    })

    if(!res.ok){
        throw new Error('fail to fetch')
    }
    return res.json();
}


const Blog = async () => {

    const data = await getData();
    console.log(data)




    return (
        <div className={styles.mainContainer}>
            <h1>Blog</h1>
            {
                data.map((item) =>(
                   <Link href="/blog/testId" className={styles.container} key={item.id}>
                   <div className={styles.imageContainer}>
                        <h2>Image Image</h2>
                   </div>
                   <div className={styles.content}>
                     <h2>Title:{item.title}</h2>                   
                   </div>
                   </Link> 
                ))
            }
        </div>
    );
};

export default Blog;