import Head from "next/head";
import React from "react";
import { ReservationsPage } from "../processes/ReservationList/ReservationsPage";
import styles from "./IndexPage.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>GoodSam Reservation</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <ReservationsPage />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>footer</div>
      </footer>
    </div>
  );
}
