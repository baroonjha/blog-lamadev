import React from "react";
import styles from "./page.module.css";
import {notFound} from 'next/navigation'
import Image from "next/image";


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
   return notFound()
  }

  return res.json();
}
//for metadata
export async function generateMetadata({params}){
  const post = getData(params.id)
  return {
    title:post.title,
    description:post.desc
  }
}


const BlogPost = async({params}) => {
  const data =await getData(params.id)
  return (
    <>
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}.</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={data.img} alt=""  fill={true} className={styles.image} />
      </div>
      </div>
      <div className={styles.details}>{data.content}
      </div>
    
    </>
  );
};

export default BlogPost;
