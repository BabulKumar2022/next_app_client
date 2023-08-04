import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inmContainer}>
                <Image className={styles.img}src='/img/about.jpg' fill={true} alt=""/>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Story</h1>
                    <h2 className={styles.imgDesc} >Handcrafting award wining digital platform</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quis harum deserunt 
                        excepturi quaerat ipsa, fugiat esse 
                        placeat odio repudiandae, voluptates 
                        placeat odio repudiandae, voluptates 
                        placeat odio repudiandae, voluptates 
                        <br />
                        <br />
                        nihil officiis corporis ipsam error! 
                        Quisquam tempore harum dolorem incidunt.
                        Quisquam tempore harum dolorem incidunt.
                        Quisquam tempore harum dolorem incidunt.
                        Quisquam tempore harum dolorem incidunt.
                        Quisquam tempore harum dolorem incidunt.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur
                         adipisicing elit. Delectus nobis quasi,
                          eaque natus non est ad minus, a corporis
                           dicta sunt, itaque quas sed commodi 
                           <br />
                           <br />
                           aspernatur at nesciunt minima nulla!
                           dicta sunt, itaque quas sed commodi 
                           <br />
                           <br />
                           aspernatur at nesciunt minima nulla!
                           dicta sunt, itaque quas sed commodi 
                           aspernatur at nesciunt minima nulla!
                    </p>
                    <button className={styles.button} type="button">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default About;