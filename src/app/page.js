"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Head from "../compo/header/head";
import { Container } from "../compo/container/container";
import Card from "../compo/card/card";
import { Pagination } from "antd";

export default function Home() {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState([true]);
  const getData = () => {
    setLoad(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=99")
      .then((res) => res.json())
      .then((data) => {
        setList(data.blogs);
        setLoad(false);
      });
  };
  const items = 9;
  const [curr, setCurr] = useState(1);
  const nPaga = Math.ceil(list.length / items);
  const startIndex = (curr - 1) * items;
  const endIndex = startIndex + items;
  const dataPage = list.slice(startIndex, endIndex);

  useEffect(() => {
    getData();
  }, []);
  const handleChange = (page) => {
    setCurr(page);
  };


  return (
    <main>
      <div className={styles.cover}>
        {/* <image ></image> */}
        <Container>
          <div className={styles.covercombonint}>
            <h1>Simple Blog.</h1>
            <p>A blog created by Aon 2023</p>
          </div>
        </Container>

      </div>
      <Container>
      {load && <span class={styles.loader}></span>}
      <div className={styles.grid}>
        {
          dataPage.map((blog,i)=>(
          <Card key={i} blog={blog} />
          ))
        }
      </div>
      <Pagination
          className={styles.pagination}
          defaultCurrent={1}
          total={110}
          count={nPaga}
          page={curr}
          onChange={handleChange}
        />
      </Container>
    </main>
  );
}
