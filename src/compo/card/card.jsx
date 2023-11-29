
import style from './card.module.css'
 import React from 'react'
 import Link from "next/link";
 import Image from "next/image";
 import dayjs from "dayjs";
import { Container } from '../container/container';
 
 const Card = ({blog}) => {
   return (
    <div className={style.card}>
        <Container>
     <div className={style.content}>
        <div className={style.imgback}>
        <Image alt="logo" src={blog.photo_url} fill={true} />
        </div>
        <div className={style.text}></div>
       <h3>{blog.title}</h3>
       <h5 className={style.category}>{blog.category}</h5>
       <div className={style.footer}>
       <Link href={`/article/${blog.id}`}>Red Article</Link>
       <span>{dayjs(blog.updated_at).format("YYYY/MM/DD")}</span>
       </div>
     </div>
     </Container>
     </div>
   )
 }
 
 export default Card
 