import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className="">@2023 Babul Kumar All right reserved</div>
          <div className={styles.social}>
          <Image src="/img/s2.png"  width={25} height={25} className={styles.icon}alt=""/>
          <Image src="/img/s3.png"  width={25} height={25} className={styles.icon}alt=""/>
          <Image src="/img/s4.png"  width={25} height={25} className={styles.icon}alt=""/>
          <Image src="/img/s5.png"  width={25} height={25} className={styles.icon}alt=""/>
          </div>
       
        </div>
    );
};
export default Footer;