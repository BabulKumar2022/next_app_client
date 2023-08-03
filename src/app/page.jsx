import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ae aliquid at facilis magnam consequuntur vero fuga enim odio iustouam dolores quas sed! </p>
        <button className={styles.button} type="button">See ours works</button>
      </div>
      <div className={styles.item}>
      <Image className={styles.img} src="/img/hero.png" width={700} height={400} alt=""/>
      </div>

    </div>
  )
}
