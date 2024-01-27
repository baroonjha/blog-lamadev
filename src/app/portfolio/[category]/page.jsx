import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import illustration from'/public/illustration.png'
const page = ({params}) => {
    console.log(params)
  return (
    <div className={styles.container}>
        <h2 className={styles.catTitle}>{params.category}</h2>
        <div className={styles.item}>
            <div className={styles.content}>
                <h2 className={styles.contentTitile}>Creative Portfolio</h2>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus adipisci ullam quidem enim, vero unde.</p>
                <Button url='#'text='See more'/>
            </div>
            <div className={styles.imgContainer}>
                <Image fill={true} src={illustration} className={styles.img}/>
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h2 className={styles.contentTitile}>Creative Portfolio</h2>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus adipisci ullam quidem enim, vero unde.</p>
                <Button url='#'text='See more'/>
            </div>
            <div className={styles.imgContainer}>
                <Image fill={true} src={illustration} className={styles.img}/>
            </div>
        </div>
    </div>
  )
}

export default page