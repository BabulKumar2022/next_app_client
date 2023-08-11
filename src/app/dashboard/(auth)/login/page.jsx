"use client"
import React from 'react';
import styles from './page.module.css'
import { signIn } from 'next-auth/react';


const Login = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const email = e.target[0].value;
        const password = e.target[1].value;
        signIn("credentials", {email, password});
      
    }
    return (
        <div className={styles.container}>  
         <h2>Login</h2>  
            <form className={styles.form} onSubmit={handleSubmit}>
          
                <input type="email" required placeholder='Email' className={styles.input}/>
                <input type="password" required  placeholder='password' className={styles.input}/>
                <button className={styles.button}>Login</button>
            </form>       
       <button onClick={()=> signIn("github")}>login with github</button> 
        </div>
    );
};

export default Login;