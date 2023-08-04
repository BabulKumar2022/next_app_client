import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

const Category = ({params}) => {
  
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                    <button className={styles.button} type="button">See detail</button>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/img/port-3.png' width={400} height={400} alt=''/>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                    <button className={styles.button} type="button">See detail</button>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/img/port-2.png' width={400} height={400} alt=''/>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test Application</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Alias quibusdam excepturi consequatur eveniet 
                    quos quia provident voluptatum voluptas nesciunt recusandae 
                    dolorem amet aspernatur, quae assumenda ab deserunt nihil est in.</p>
                    <button className={styles.button} type="button">See detail</button>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/img/port-1.png' width={400} height={400} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Category;