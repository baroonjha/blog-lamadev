"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const dashboard = () => {
  // const [data,setData] = useState()
  // const [err,setErr] = useState(false)
  // const [isLoading,setIsLoading] = useState(false)
  // useEffect(()=>{
  //   const getData = async ()=>{
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
  //       cache:"no-store",
  //     })
  //     if(!res.ok){
  //       setErr(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // },[])
  // console.log(data)

  const session = useSession();
  // console.log(session);

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error,mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  const handleSubmit=async(e)=>{
      e.preventDefault()
      const title=e.target[0].value
      const desc=e.target[1].value
      const img=e.target[2].value
      const content=e.target[3].value

    try {
      await fetch("api/posts",{
        method:"POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username:session.data.user.name,
        })
      })
      mutate()
    } catch (err) {
      console.log(err)
    }

  }

  const handelDelete = async(_id)=>{
        try {
          await fetch(`api/post/${id}`,{
            method:"DELETE"
          })
          mutate()
          e.target.reset()
        } catch (err) {
          console.log(err)
        }
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? "Loading":data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} width={"100px"} alt="" />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
             <span className={styles.delete} onClick={()=>handelDelete(post._id)}>X</span>
            </div>
          ))}
          
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" placeholder="title" className={styles.input} />
          <input type="text" placeholder="desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea name="textar"  cols="30" rows="10"></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default dashboard;
