import React from 'react'
import styles from './page.module.css'

const layout = ({children}) => {
  return (
    <>
    <h1 className={styles.maintitle}>My Works</h1>
    {children}
    </>
  )
}

export default layout