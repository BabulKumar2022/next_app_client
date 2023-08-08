import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src='/img/contact3.png' fill={true} alt=''/>
                </div>
                <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input readOnly type="text" value="" placeholder='Name'className={styles.input}/>
                    <input readOnly type="email" value="" placeholder='Email'className={styles.input}/>
                    <textarea type="text" id="" cols="30" rows="10" placeholder='Write here message' className={styles.textArea}></textarea>
                </form>
                <button className={styles.button} type="button">Contact</button>
                </div>
              
            </div>
            
        </div>
    );
};

export default Contact;