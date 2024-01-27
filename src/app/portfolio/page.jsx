import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.selectTitle}>Choose a gallery</h2>
      <div className={styles.items}>
        <Link href='/portfolio/illustration' className={styles.item}>
          <span className={styles.title}>illustration</span>
        </Link>
        <Link href='/portfolio/website' className={styles.item}>
          <span className={styles.title}>website</span>
        </Link>
        <Link href='/portfolio/application' className={styles.item}>
          <span className={styles.title}>application</span>
        </Link>
      </div>
    </div>
  )
}

export default portfolio