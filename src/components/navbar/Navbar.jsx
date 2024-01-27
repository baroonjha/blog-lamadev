"use client"
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links=[
    {
        id: 1,
        title: "Home",
        url: "/",
    
    },
    {
        id: 2,
        title: "Dashboard",
        url: "/dashboard",
    
    },
    {
        id: 3,
        title: "About",
        url: "/about",
    }
];

const Navbar = () => {
    const session = useSession()
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>NavBar</Link>
        <div className={styles.links}>
        <DarkModeToggle />
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>

        {session.status ==="authenticated" && 
        <button className={styles.logout} onClick={signOut}>Logout</button>
        }
        </div>
        
    
       {/* { links.map((link)=>{
           <Link key={link.id} href={link.url} >${link.title}</Link>
        console.log(link)
        })} */}
    
    </div>
  )
}

export default Navbar