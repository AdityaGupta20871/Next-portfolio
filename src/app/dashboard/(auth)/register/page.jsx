"use client"
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const registerUser = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/dashboard/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})})
}
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={registerUser}>
        <input type="email" className={styles.input} value={email} placeholder='email' required  onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className={styles.input} value={password} placeholder='password' required  onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.button}>Register</button>
      </form>
      <Link href='/dashboard/login'>Login with an existing account</Link>
    </div>
  )
}

export default Register