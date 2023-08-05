import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

const BlogPost = () => {
    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Lorem ipsum r eaque dolorem sunt maiores, ratione, excepturi sequi possimus deserunt ipsa. Ut optio amet ducimus natus! </h1>
                    <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Enim nesciunt neque, eligendi autem 
                    esse optio velit voluptas error sequi pariatur aliquid
                     voluptatem obcaecati, nisi in deserunt laboriosam 
                     voluptatem obcaecati, nisi in deserunt laboriosam 
                     voluptatem obcaecati, nisi in deserunt laboriosam 
                     laborum ipsa impedit?</p>
                        <div className={styles.author}>
                            <Image src="" width={40} height={40} alt='' className={styles.avatar}/>
                            <span className={styles.username}>Jone herry</span>
                        </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/img/blog-4.png" width={450} height={300} alt='' className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                     <br />
                     <br />
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Qui, ad!
                </p>
            </div>
        </div>
    );
};

export default BlogPost;