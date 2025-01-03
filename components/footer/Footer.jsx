import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 All rights reserved.</div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/code_withadi/profilecard/?igsh=NnczbjB0eWJmc2dm" target="_blank" rel="noopener noreferrer">
          <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Instagram" />
        </a>
        <a href="https://x.com/AdityaGupta065" target="_blank" rel="noopener noreferrer">
          <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-gupta-732857233/" target="_blank" rel="noopener noreferrer">
          <Image src="/4.png" width={20} height={20} className={styles.icon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
