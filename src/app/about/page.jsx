import React from 'react'
import styles from './page.module.css'
import image from '/public/about.jpg'
import Image from 'next/image'
import Button from '@/components/button/Button'
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={image} alt='about-image'fill={true} className='{styles.img'/>
        <div className={styles.imgText}>
          <h1>Digital StoryTellers</h1>
          <h2>No comprimse with the quality </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo delectus vitae repellendus libero numquam maiores officia ipsam, fugiat distinctio error iure, dolorum totam non aliquam nesciunt neque optio quo quod soluta iste.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus eum debitis autem earum expedita?
          
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, alias adipisci explicabo dignissimos quod sequi perspiciatis, minima deleniti excepturi optio quos. Quasi quos earum odio optio magni qui molestias excepturi aliquam et.
          <br />
          <br />
          -Dynamic Websites
          <br />
          <br />
          -Fast and Handy
          <br />
          <br />
          -Mobile Apps
          <br />
          </p>
          <Button url='/contact' text='Contact' />
        </div>

      </div>
     </div>
  )
}

export default about