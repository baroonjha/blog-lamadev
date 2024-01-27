import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contactSupport from "public/contactSupport.jpg";
import Button from "@/components/button/Button";

export const metadata = {
  title: 'Contact',
  description: 'Contact us',
}

const contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let's Keep in Touch</h2>
      <div className={styles.content}>
        <div className={styles.contactImage}>
          <Image className={styles.image} src={contactSupport} alt="" fill={true} />
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />

          <input className={styles.input} type="email" placeholder="Email" />

          <textarea className={styles.textArea}
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button url={'/'} text={'Send Now'}/>
        </form>
      </div>
    </div>
  );
};

export default contact;
