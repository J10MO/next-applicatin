import React from "react";
import { Container } from "../container/container";
import styles from "./head.module.css";
import Link from "next/link";

const Head = () => {
  return (
    
      <div className={styles.header}>
        <Container>
          <dev className={styles.content}>
            <h1>Aon 2023</h1>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
              <Link href={"/"}>About</Link>
              </li>
              <li>
              <Link href={"/"}>Help</Link>
              </li>
            </ul>
          </dev>
        </Container>
      </div>
  );
};

export default Head;
