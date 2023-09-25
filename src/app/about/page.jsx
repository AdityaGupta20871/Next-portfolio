import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="/home.png"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Designer X Developer</h1>
        <h2 className={styles.imgDesc}>
          Making Cool designs in Figma
        </h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who I Am </h1>
        <p className={styles.desc}>
          I am Aditya, a B.Tech student at MAIT College, Delhi, with a passion for web development and design. In my free time, I enjoy crafting websites and apps in Figma. I thrive in hackathons, such as Adobe Designathon at IIT Delhi and IGDTUW Hackathon.
          <br />
          <br />
          I also contribute as a technical writer for Geek for Geeks and have been a contributor to Rsuite.js. You can explore my insights and projects on my blog at <a href="Devspotlight.hashnode.dev">Devspotlight.hashnode.dev</a>.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What I Do?</h1>
        <p className={styles.desc}>
        Proficient in Figma, I specialize in crafting visually appealing and user-friendly web and app designs.Skilled in Tailwind CSS for efficient and maintainable styling.
Proficient in React and NEXT.js for building modern, high-performance user interfaces.Familiar with database systems, including MongoDB, Prisma, and Firebase, for efficient data management.
          <br />
          <br /> - Proficient in Git, facilitating collaborative development and code management.
          <br />
          <br /> - Skilled in Tailwind CSS , Material UI , Shadcn and usageof other UI libraries for efficient and maintainable styling.
          <br />
          <br /> - Expertise in HTML, CSS, and JavaScript, ensuring responsive and interactive web applications.
        </p>
        <Link href="/contact"><button className={styles.button}>Contact</button></Link>
      </div>
    </div>
  </div>
  )
}

export default About