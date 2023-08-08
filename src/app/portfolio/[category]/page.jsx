import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import {items} from "./data.js"
import {notFound} from "next/navigation";



const getData = (cat) =>{
    const data = items[cat]
    console.log(data)
    if(data){
        return data
    }
    return notFound()

}


const Category = ({params}) => {
    const data = getData(params.category)
  
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {
             data.map((ite)=>(
                    <div className={styles.item} key={ite.id}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{ite.tittle}</h1>
                            <p className={styles.desc}>{ite.desc}</p>
                            <button className={styles.button} type="button">See detail</button>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src={ite.image} width={400} height={400} alt=''/>
                        </div>
                    </div>
                  ))
                }
           
            
        </div>
    );
};

export default Category;

// next_user
// pass = wgjP10PT6ThSAMMo