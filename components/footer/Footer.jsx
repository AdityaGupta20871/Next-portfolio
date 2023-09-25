import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
    <div>©2023 All rights reserved.</div>
    <div className={styles.social}>
      <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Aditya" />
      <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Aditya" />
      <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Aditya" />
      <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Aditya" />

    </div>
  </div>
  )
}

export default Footer