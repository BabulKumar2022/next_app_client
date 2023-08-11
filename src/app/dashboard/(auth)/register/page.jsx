"use client"

import React, { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register =  () => {
    const [err, setErr] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className={styles.container}>
          <h2>Register</h2>  
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" required placeholder='User name' className={styles.input}/>
                <input type="email" required placeholder='Email' className={styles.input}/>
                <input type="password" required  placeholder='password' className={styles.input}/>
                <button className={styles.button}>Register</button>
            </form>
            {err && "something went wrong"}
            <Link href="/dashboard/login"> Login with an existing account</Link>
        </div>
    );
};

export default Register;