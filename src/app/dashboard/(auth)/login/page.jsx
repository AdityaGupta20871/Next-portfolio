"use client"
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div className="container">
        <button onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default page
