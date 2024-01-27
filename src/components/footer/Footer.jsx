import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Baroon .All rights reserved</div>
        <div className={styles.socialLogo}>
        <Link href='https://facebook.com' target='_blank'>
        <Image src='/fb.png' className={styles.icon} width={20} height={20} alt='fb' /></Link>
        <Image src='/twitter.png' className={styles.icon} width={20} height={20} alt='twitter' />
        <Image src='/insta.png' className={styles.icon} width={20} height={20} alt='instagram' />
          <Image src='/linkedin.png' className={styles.icon} width={20} height={20} alt='linkedin' />
        </div>
    </div>
  )
}

export default Footer