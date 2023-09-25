"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
const Contact = () => {

  const [success, setSuccess] = useState(null);
  const ref = useRef()
  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_muzkfi2",
        "template_ulik8yg",
        ref.current,
        "x6ZxZVjR08trBAF7T"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image src='/contact.png' className={styles.image} width={500} height={500} />
        </div>
          <form  ref={ref} className={styles.form} onSubmit={handleSubmit}>
            <input name='Name' type="text" placeholder='name' className={styles.input} />
            <input name='email' type="text" placeholder='email' className={styles.input} />
            <textarea name='message' className={styles.textarea} cols='22'rows='15' placeholder='message' />
            <button type='submit' className={styles.button}  url='#' >Send</button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
      </div>
    </div>     
  )
}
export default Contact