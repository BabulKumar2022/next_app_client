"use client"
import React from 'react';
import styles from './page.module.css'
import { signIn } from 'next-auth/react';
const Login = () => {
    return (
        <div className={styles.container}>
      <button onClick={() => signIn("github")}> Login with github</button> 
        </div>
    );
};

export default Login;