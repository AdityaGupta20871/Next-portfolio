import React from 'react'
import Image from 'next/image'
import Home from 'public/home.png'
import styles from './page.module.css'
import Link from 'next/link'
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.mask}>
        <h1 className={styles.heading}>Better Design For Your Products</h1>
        </div>
        <p className={styles.para}>Turning your tech ideas into web designs</p>
        <Link href="/portfolio"><button  className={styles.button}>See My Works</button></Link>
      </div>
      <div className={styles.item}>
      <Image src={Home} width={500} height={500} className={styles.img} />
      </div>
      </div>
  )
}

export default page